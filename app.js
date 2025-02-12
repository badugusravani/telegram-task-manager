let tg = window.Telegram.WebApp;
tg.expand();

// Premium settings
const PREMIUM = {
    price: 499, // $4.99
    maxFreeTasks: 3,
    productTitle: '⭐ Premium Upgrade',
    description: 'Unlimited tasks and priority support'
};

// Check premium status
const isPremium = () => localStorage.getItem('premium') === 'true';

// User Management
let currentUser = null;

// Initialize user and data
function initializeUser() {
    const user = tg.initDataUnsafe?.user;
    if (user) {
        currentUser = {
            id: user.id,
            username: user.username,
            firstName: user.first_name,
            lastName: user.last_name
        };
        
        // Load user-specific data
        const userKey = `user_${currentUser.id}`;
        tasks = JSON.parse(localStorage.getItem(`${userKey}_tasks`) || '[]');
        runningTasks = JSON.parse(localStorage.getItem(`${userKey}_running`) || '[]');
        
        // Save user data
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserDisplay();
    } else {
        console.error('No user data available');
    }
}

// Update user display
function updateUserDisplay() {
    const userInfoElement = document.getElementById('userInfo');
    if (currentUser) {
        const name = currentUser.firstName || currentUser.username;
        userInfoElement.innerHTML = `
            <div class="user-avatar">${name.charAt(0).toUpperCase()}</div>
            <div class="user-name">${name}</div>
        `;
    }
}

// Initialize tasks arrays
let tasks = [];
let runningTasks = [];

// Save tasks to localStorage with user-specific keys
function saveTasks() {
    if (!currentUser) return;
    const userKey = `user_${currentUser.id}`;
    localStorage.setItem(`${userKey}_tasks`, JSON.stringify(tasks));
    localStorage.setItem(`${userKey}_running`, JSON.stringify(runningTasks));
    
    // Save to server (if implemented)
    syncWithServer();
}

// Sync data with server
function syncWithServer() {
    if (!currentUser) return;
    
    // Send data to bot
    tg.sendData(JSON.stringify({
        action: 'sync_data',
        userId: currentUser.id,
        data: {
            tasks,
            runningTasks,
            isPremium: isPremium()
        }
    }));
}

// Task class
class Task {
    constructor(name, url, timer) {
        this.id = Date.now();
        this.name = name;
        this.url = url;
        this.timer = timer;
        this.timeLeft = timer * 60; // Convert minutes to seconds
        this.interval = null;
    }
}

// Handle timer selection
document.getElementById('taskTimer').addEventListener('change', function() {
    const customTimeInput = document.getElementById('customTimeInput');
    if (this.value === 'custom') {
        customTimeInput.classList.remove('hidden');
    } else {
        customTimeInput.classList.add('hidden');
    }
});

// Handle premium purchase
function handlePremiumPurchase() {
    tg.MainButton.text = "Pay for Premium";
    tg.MainButton.show();
    
    tg.MainButton.onClick(() => {
        tg.sendData(JSON.stringify({
            action: 'buy_premium',
            amount: PREMIUM.price,
            title: PREMIUM.productTitle,
            description: PREMIUM.description
        }));
    });
}

// Add new task
function addTask() {
    const name = document.getElementById('taskName').value;
    const url = document.getElementById('taskUrl').value;
    const timerSelect = document.getElementById('taskTimer');
    
    if (!name || !url || !timerSelect.value) {
        tg.showAlert('Please fill in all fields');
        return;
    }

    // Check task limit for free users
    if (!isPremium() && tasks.length >= PREMIUM.maxFreeTasks) {
        tg.showConfirm(
            `You've reached the limit of ${PREMIUM.maxFreeTasks} tasks.\nUpgrade to Premium for unlimited tasks?`,
            (confirmed) => {
                if (confirmed) handlePremiumPurchase();
            }
        );
        return;
    }

    let timer;
    if (timerSelect.value === 'custom') {
        const hours = parseInt(document.getElementById('customHours').value) || 0;
        const minutes = parseInt(document.getElementById('customMinutes').value) || 0;
        
        if (hours === 0 && minutes === 0) {
            tg.showAlert('Please specify a valid duration');
            return;
        }
        
        timer = hours * 60 + minutes;
    } else {
        timer = parseFloat(timerSelect.value) * 60;
    }

    const task = new Task(name, url, timer);
    tasks.push(task);
    saveTasks();
    renderTasks();
    clearForm();
}

// Clear form inputs
function clearForm() {
    document.getElementById('taskName').value = '';
    document.getElementById('taskUrl').value = '';
    document.getElementById('taskTimer').value = '';
    document.getElementById('customHours').value = '';
    document.getElementById('customMinutes').value = '';
    document.getElementById('customTimeInput').classList.add('hidden');
}

// Start task timer
function startTask(taskId) {
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) return;

    const task = tasks[taskIndex];
    tasks.splice(taskIndex, 1);
    runningTasks.push(task);
    saveTasks();

    // Open URL
    window.open(task.url, '_blank');

    // Start timer
    task.interval = setInterval(() => {
        task.timeLeft--;
        
        if (task.timeLeft <= 0) {
            clearInterval(task.interval);
            completeTask(task.id);
        }
        
        renderTasks();
    }, 1000);

    renderTasks();
}

// Complete task
function completeTask(taskId) {
    const taskIndex = runningTasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) return;

    const task = runningTasks[taskIndex];
    clearInterval(task.interval);
    task.timeLeft = task.timer * 60;
    runningTasks.splice(taskIndex, 1);
    tasks.push(task);
    saveTasks();

    tg.showAlert(`Task "${task.name}" is completed!`);
    renderTasks();
}

// Format time for display
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    if (hours > 0) {
        return `${hours}h ${minutes}m ${remainingSeconds}s`;
    } else {
        return `${minutes}m ${remainingSeconds}s`;
    }
}

// Run all tasks
function runAllTasks() {
    if (tasks.length === 0) {
        tg.showAlert('No tasks to run!');
        return;
    }

    const delay = 500; // 500ms delay between starting each task
    let currentIndex = 0;

    function startNextTask() {
        if (currentIndex < tasks.length) {
            const task = tasks[currentIndex];
            startTask(task.id);
            currentIndex++;
            setTimeout(startNextTask, delay);
        }
    }

    startNextTask();
}

// Reset a running task
function resetTask(taskId) {
    const taskIndex = runningTasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) return;

    const task = runningTasks[taskIndex];
    clearInterval(task.interval);
    task.interval = null;
    task.timeLeft = task.timer * 60;
    
    runningTasks.splice(taskIndex, 1);
    tasks.push(task);
    
    saveTasks();
    renderTasks();
    tg.showAlert(`Task "${task.name}" has been reset`);
}

// Update task counts and limits
function updateTaskCounts() {
    const taskCount = tasks.length;
    const runningCount = runningTasks.length;
    
    document.getElementById('taskCount').textContent = `${taskCount} tasks`;
    document.getElementById('runningTaskCount').textContent = `${runningCount} running`;
    
    // Show/hide run all button based on tasks availability
    const runAllButton = document.getElementById('runAllButton');
    runAllButton.style.display = tasks.length > 0 ? 'block' : 'none';

    // Update task limit display
    const taskLimit = document.getElementById('taskLimit');
    if (!isPremium()) {
        taskLimit.textContent = `(${taskCount}/${PREMIUM.maxFreeTasks})`;
        if (taskCount >= PREMIUM.maxFreeTasks) {
            taskLimit.style.color = '#dc3545';
        }
    } else {
        taskLimit.textContent = '(⭐ Unlimited)';
        taskLimit.style.color = '#ffd700';
    }

    // Show/hide premium banner
    const premiumBanner = document.getElementById('premiumBanner');
    premiumBanner.style.display = isPremium() ? 'none' : 'flex';
}

// Handle premium status update
tg.onEvent('invoiceClosed', (event) => {
    if (event.status === 'paid') {
        localStorage.setItem('premium', 'true');
        updateTaskCounts();
        tg.showAlert('Welcome to Premium! 🌟 Enjoy unlimited tasks!');
    }
});

// Render tasks
function renderTasks() {
    const tasksListElement = document.getElementById('tasksList');
    const runningTasksListElement = document.getElementById('runningTasksList');

    // Render pending tasks
    tasksListElement.innerHTML = tasks.length === 0 ? 
        '<div class="no-tasks">No pending tasks</div>' : 
        tasks.map(task => `
        <div class="task-item">
            <div class="task-info">
                <div class="task-name">${task.name}</div>
                <div class="task-url">${task.url}</div>
            </div>
            <div class="task-timer">${task.timer}m</div>
            <button onclick="startTask(${task.id})">Start</button>
        </div>
    `).join('');

    // Render running tasks
    runningTasksListElement.innerHTML = runningTasks.length === 0 ?
        '<div class="no-tasks">No running tasks</div>' :
        runningTasks.map(task => `
        <div class="task-item">
            <div class="task-info">
                <div class="task-name">${task.name}</div>
                <div class="task-url">${task.url}</div>
            </div>
            <div class="task-controls">
                <div class="task-timer">${formatTime(task.timeLeft)}</div>
                <button onclick="resetTask(${task.id})" class="reset-button">↺ Reset</button>
            </div>
        </div>
    `).join('');

    // Update task counts
    updateTaskCounts();
}

// Restore running tasks timers
runningTasks.forEach(task => {
    task.interval = setInterval(() => {
        task.timeLeft--;
        
        if (task.timeLeft <= 0) {
            clearInterval(task.interval);
            completeTask(task.id);
        }
        
        renderTasks();
    }, 1000);
});

// Initialize user and render tasks
initializeUser();
renderTasks();

// Set Telegram WebApp theme
document.documentElement.style.setProperty('--tg-theme-bg-color', tg.themeParams.bg_color);
document.documentElement.style.setProperty('--tg-theme-text-color', tg.themeParams.text_color);
document.documentElement.style.setProperty('--tg-theme-button-color', tg.themeParams.button_color);
document.documentElement.style.setProperty('--tg-theme-button-text-color', tg.themeParams.button_text_color);
