// Admin Configuration
const ADMIN_CONFIG = {
    adminIds: ['YOUR_TELEGRAM_ID'], // Add admin Telegram IDs
    tokenRewards: {
        taskCompletion: 10,
        referral: 50,
        minimumPayout: 100
    }
};

// Admin task template
class AdminTask {
    constructor(name, description, reward, requirements) {
        this.id = Date.now();
        this.name = name;
        this.description = description;
        this.reward = reward;
        this.requirements = requirements;
        this.createdAt = new Date();
        this.completions = [];
    }
}

// Admin dashboard class
class AdminDashboard {
    constructor(bot) {
        this.bot = bot;
        this.tasks = [];
        this.userStats = new Map();
    }

    // Check if user is admin
    isAdmin(userId) {
        return ADMIN_CONFIG.adminIds.includes(userId.toString());
    }

    // Add new reward task
    addRewardTask(name, description, reward, requirements) {
        const task = new AdminTask(name, description, reward, requirements);
        this.tasks.push(task);
        return task;
    }

    // Get user statistics
    getUserStats() {
        const stats = {
            totalUsers: this.userStats.size,
            activeUsers: 0,
            totalTasksCompleted: 0,
            totalTokensAwarded: 0
        };

        this.userStats.forEach(user => {
            if (user.lastActive > Date.now() - 7 * 24 * 60 * 60 * 1000) {
                stats.activeUsers++;
            }
            stats.totalTasksCompleted += user.completedTasks.length;
            stats.totalTokensAwarded += user.tokens;
        });

        return stats;
    }

    // Handle admin commands
    async handleAdminCommand(msg, command) {
        const chatId = msg.chat.id;
        const userId = msg.from.id;

        if (!this.isAdmin(userId)) {
            return;
        }

        switch (command) {
            case '/admin':
                await this.showAdminPanel(chatId);
                break;
            case '/stats_all':
                await this.showAllStats(chatId);
                break;
            case '/add_task':
                await this.startTaskCreation(chatId);
                break;
            case '/view_users':
                await this.showUsersList(chatId);
                break;
        }
    }

    // Show admin panel
    async showAdminPanel(chatId) {
        const stats = this.getUserStats();
        const message = `
📊 Admin Dashboard

👥 Users:
• Total: ${stats.totalUsers}
• Active (7d): ${stats.activeUsers}

🎯 Tasks:
• Total Tasks: ${this.tasks.length}
• Completions: ${stats.totalTasksCompleted}

💰 Tokens:
• Total Awarded: ${stats.totalTokensAwarded}

Use these commands:
/add_task - Create reward task
/view_users - List all users
/stats_all - Detailed statistics
        `;

        await this.bot.sendMessage(chatId, message, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [{text: "➕ Add Task", callback_data: "add_task"}],
                    [{text: "👥 Users", callback_data: "view_users"}],
                    [{text: "📊 Statistics", callback_data: "view_stats"}]
                ]
            }
        });
    }

    // Show all users statistics
    async showAllStats(chatId) {
        const stats = this.getUserStats();
        const message = `
📊 Detailed Statistics

👥 Users
• Total Registered: ${stats.totalUsers}
• Active Users (7d): ${stats.activeUsers}
• Engagement Rate: ${((stats.activeUsers / stats.totalUsers) * 100).toFixed(1)}%

🎯 Task Completion
• Total Tasks Created: ${this.tasks.length}
• Total Completions: ${stats.totalTasksCompleted}
• Avg per User: ${(stats.totalTasksCompleted / stats.totalUsers).toFixed(1)}

💰 Token Economy
• Total Tokens Awarded: ${stats.totalTokensAwarded}
• Avg per User: ${(stats.totalTokensAwarded / stats.totalUsers).toFixed(1)}
        `;

        await this.bot.sendMessage(chatId, message);
    }

    // Start task creation process
    async startTaskCreation(chatId) {
        await this.bot.sendMessage(chatId, 
            "To create a new reward task, send in this format:\n\n" +
            "name | description | reward | requirements\n\n" +
            "Example:\n" +
            "Share Bot | Share bot link with 3 friends | 50 | 3 referrals"
        );
    }

    // Show users list
    async showUsersList(chatId) {
        let message = "👥 Users List\n\n";
        this.userStats.forEach((user, userId) => {
            message += `
User: ${user.username || 'Anonymous'}
• Tasks: ${user.completedTasks.length}
• Tokens: ${user.tokens}
• Last Active: ${new Date(user.lastActive).toLocaleDateString()}
            `;
        });

        await this.bot.sendMessage(chatId, message);
    }
}

export default AdminDashboard;
