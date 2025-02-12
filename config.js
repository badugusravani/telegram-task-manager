// Telegram Bot Configuration
const BOT_CONFIG = {
    token: '7859336384:AAFxuqe0-0aSUNs7WdktmBV9dIwrUxnevvg',
    // Add your web app URL after hosting
    webAppUrl: 'https://your-domain.com/task-manager'
};

// Example bot command to launch web app
/*
bot.command('start', (ctx) => {
    ctx.reply('Welcome to Task Manager!', {
        reply_markup: {
            inline_keyboard: [[
                {
                    text: "Open Task Manager",
                    web_app: {url: BOT_CONFIG.webAppUrl}
                }
            ]]
        }
    });
});
*/

// Don't share your token publicly
export default BOT_CONFIG;
