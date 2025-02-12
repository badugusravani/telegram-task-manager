import TelegramBot from 'node-telegram-bot-api';
import BOT_CONFIG from './config.js';

// Create a bot instance
const bot = new TelegramBot(BOT_CONFIG.token, {polling: true});

// Handle /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    
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

console.log('Bot server is running...');
