import TelegramBot from 'node-telegram-bot-api';
import BOT_CONFIG from './config.js';

// Create a bot instance
const bot = new TelegramBot(BOT_CONFIG.token, {polling: true});

// Import and initialize admin dashboard after bot creation
import AdminDashboard from './admin-dashboard.js';
const adminDashboard = new AdminDashboard(bot);

// Payment config
const PREMIUM = {
    price: 499, // $4.99 in cents
    currency: 'USD',
    description: 'Unlimited tasks and priority support',
    title: '⭐ Premium Upgrade',
    payload: 'premium_upgrade'
};

// User data storage with token system
const users = new Map();

// Token system configuration
const TOKEN_SYSTEM = {
    taskCompletion: 10,   // tokens per task
    referral: 50,         // tokens per referral
    minimumPayout: 100    // minimum tokens for rewards
};

// User management functions
const updateUserData = (userId, data) => {
    const existingData = users.get(userId) || {
        tokens: 0,
        completedTasks: [],
        referrals: [],
        lastActive: new Date()
    };
    
    users.set(userId, {
        ...existingData,
        ...data,
        lastSync: new Date()
    });
    
    // Update admin dashboard stats
    adminDashboard.userStats.set(userId, users.get(userId));
};

// Award tokens to user
const awardTokens = async (userId, amount, reason) => {
    const userData = users.get(userId);
    if (!userData) return;

    userData.tokens = (userData.tokens || 0) + amount;
    updateUserData(userId, userData);

    await bot.sendMessage(userData.chatId, 
        `🎉 You earned ${amount} tokens!\nReason: ${reason}\nTotal balance: ${userData.tokens} tokens`
    );
};

// Get user data
const getUserData = (userId) => {
    return users.get(userId);
};

// Handle all commands
bot.onText(/\/(.+)/, (msg, match) => {
    const command = match[1];
    
    // Handle admin commands
    if (command.startsWith('admin') || command === 'stats_all' || command === 'view_users') {
        adminDashboard.handleAdminCommand(msg, '/' + command);
        return;
    }

    // Handle regular commands
    switch(command) {
        case 'start':
            handleStart(msg);
            break;
        case 'tokens':
            handleTokens(msg);
            break;
        case 'referral':
            handleReferral(msg);
            break;
    }
});

// Handle /start command
const handleStart = (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    
    const referralId = msg.text.split(' ')[1];
    
    // Initialize user data
    updateUserData(userId, {
        chatId,
        username: msg.from.username,
        firstName: msg.from.first_name,
        lastName: msg.from.last_name,
        tasks: [],
        runningTasks: [],
        isPremium: false,
        tokens: 0,
        referrer: referralId
    });

    // Handle referral
    if (referralId && referralId !== userId.toString()) {
        handleReferralComplete(referralId, userId);
    }
    
    bot.sendMessage(chatId, 'Welcome to Task Manager! Click the button below to open the app:', {
        reply_markup: {
            inline_keyboard: [[
                {
                    text: "📝 Open Task Manager",
                    web_app: {url: BOT_CONFIG.webAppUrl}
                }
            ]]
        }
    });
};

// Handle referral completion
const handleReferralComplete = async (referrerId, newUserId) => {
    const referrer = users.get(referrerId);
    if (referrer) {
        referrer.referrals = referrer.referrals || [];
        if (!referrer.referrals.includes(newUserId)) {
            referrer.referrals.push(newUserId);
            await awardTokens(referrerId, TOKEN_SYSTEM.referral, 'New referral joined');
            updateUserData(referrerId, referrer);
        }
    }
};

// Handle tokens command
const handleTokens = async (msg) => {
    const userId = msg.from.id;
    const userData = users.get(userId);
    
    if (!userData) return;

    const message = `
💰 Your Token Balance

Current Balance: ${userData.tokens || 0} tokens
Tasks Completed: ${userData.completedTasks?.length || 0}
Referrals: ${userData.referrals?.length || 0}

Earn more tokens:
• Complete tasks: +${TOKEN_SYSTEM.taskCompletion} tokens
• Refer friends: +${TOKEN_SYSTEM.referral} tokens
• Minimum payout: ${TOKEN_SYSTEM.minimumPayout} tokens
    `;

    await bot.sendMessage(msg.chat.id, message);
};

// Handle referral command
const handleReferral = async (msg) => {
    const userId = msg.from.id;
    const botUsername = (await bot.getMe()).username;
    const referralLink = `https://t.me/${botUsername}?start=${userId}`;
    
    const message = `
🎯 Your Referral Link
${referralLink}

Earn ${TOKEN_SYSTEM.referral} tokens for each new user!
Current referrals: ${users.get(userId)?.referrals?.length || 0}
    `;

    await bot.sendMessage(msg.chat.id, message);
};

// Handle task completion
const handleTaskCompletion = async (userId, taskId) => {
    const userData = users.get(userId);
    if (!userData) return;

    // Award tokens for task completion
    await awardTokens(userId, TOKEN_SYSTEM.taskCompletion, 'Task completed');
    
    // Update completed tasks
    userData.completedTasks = userData.completedTasks || [];
    userData.completedTasks.push(taskId);
    updateUserData(userId, userData);
};

// Handle web app data
bot.on('web_app_data', async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const data = JSON.parse(msg.web_app_data.data);
    
    // Handle data sync
    if (data.action === 'sync_data') {
        updateUserData(userId, {
            tasks: data.data.tasks,
            runningTasks: data.data.runningTasks,
            isPremium: data.data.isPremium
        });
        
        bot.sendMessage(chatId, '✅ Data synced successfully');
        return;
    }

    // Handle task completion
    if (data.action === 'complete_task') {
        await handleTaskCompletion(userId, data.taskId);
        return;
    }

    // Handle premium purchase
    if (data.action === 'buy_premium') {
        const invoice = {
            provider_token: BOT_CONFIG.paymentToken,
            start_parameter: 'premium_upgrade',
            title: PREMIUM.title,
            description: PREMIUM.description,
            currency: PREMIUM.currency,
            prices: [{label: 'Premium Access', amount: PREMIUM.price}],
            payload: PREMIUM.payload
        };

        try {
            await bot.sendInvoice(chatId, invoice);
        } catch (error) {
            console.error('Payment error:', error);
            bot.sendMessage(chatId, 'Sorry, there was an error processing your payment. Please try again.');
        }
    }
});

// Handle successful payments
bot.on('pre_checkout_query', (query) => {
    bot.answerPreCheckoutQuery(query.id, true);
});

bot.on('successful_payment', async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    
    // Update user's premium status
    updateUserData(userId, { isPremium: true });
    
    await bot.sendMessage(chatId, '🌟 Thank you for upgrading to Premium! Enjoy unlimited tasks!');
});

// Handle callback queries
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    bot.answerCallbackQuery(query.id);
});

// Error handling
bot.on('polling_error', (error) => {
    console.error('Polling error:', error);
});

console.log('Bot server is running with admin dashboard and token system...');
