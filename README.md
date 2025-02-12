# Telegram Task Manager Mini App

A Telegram mini app for managing tasks with timers and URL integration.

## Features

- Add tasks with name, URL, and duration
- Flexible timer options (30min to 8 hours)
- Custom duration support
- Run all tasks sequentially
- Individual task reset controls
- Task persistence across sessions
- Responsive design with glass-morphism UI

## Setup Instructions

1. Create a new bot in Telegram:
   - Contact @BotFather on Telegram
   - Use /newbot command
   - Follow the prompts to create your bot
   - Save the API token

2. Configure the Bot:
   - Use /mybots command in BotFather
   - Select your bot
   - Go to 'Bot Settings' > 'Menu Button'
   - Set the Web App URL after hosting

3. Deploy:
   - Host these files on any HTTPS server
   - Update the webAppUrl in config.js
   - Ensure all files are accessible via HTTPS

## Development

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd telegram-task-manager

# Install dependencies
npm install

# Start the bot server
npm start
```

## File Structure

- `index.html` - Main app interface
- `styles.css` - Styling with glass-morphism effects
- `app.js` - Core application logic
- `bot.js` - Telegram bot server
- `config.js` - Bot configuration

## Requirements

- HTTPS hosting
- Valid SSL certificate
- Node.js for bot server
- Telegram bot token

## License

MIT License
