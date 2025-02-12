// Telegram Bot Configuration
const BOT_CONFIG = {
    token: '7859336384:AAFxuqe0-0aSUNs7WdktmBV9dIwrUxnevvg',
    webAppUrl: 'https://badugusravani.github.io/telegram-task-manager/',
    
    // Payment settings - Get this from @BotFather using /mybots -> Bot Settings -> Payments
    paymentToken: '', // Add your Stripe/other payment provider token here
    
    // Premium settings
    premium: {
        price: 499, // $4.99 in cents
        currency: 'USD',
        title: '⭐ Premium Upgrade',
        description: 'Unlock unlimited tasks and priority support'
    }
};

/*
Available Bot Commands:
/start - Initialize user and open task manager
/stats - View your task statistics and usage

Setup Instructions:

1. Bot is configured with:
   - User tracking and statistics
   - Task synchronization
   - Premium features
   - Usage analytics

2. Get Payment Provider Token:
   - Go to @BotFather
   - /mybots -> Select your bot
   - Bot Settings -> Payments
   - Select your payment provider (e.g., Stripe)
   - Copy the payment token
   - Paste it in paymentToken above

2. Configure Web App URL:
   - Replace webAppUrl with your hosted app URL
   - Must be HTTPS
   - Example: https://username.github.io/telegram-task-manager

3. Premium Settings:
   - Adjust price if needed (in smallest currency unit, e.g., cents)
   - Supported currencies: USD, EUR, GBP, JPY, etc.
   - Keep titles and descriptions user-friendly
*/

// Don't share your token publicly
export default BOT_CONFIG;
