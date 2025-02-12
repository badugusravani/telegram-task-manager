let tg = window.Telegram.WebApp;
tg.expand();

// Initialize tasks arrays from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
let runningTasks = JSON.parse(localStorage.getItem('runningTasks') || '[]');

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('runningTasks', JSON.stringify(runningTasks));
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

// Add new task
function addTask() {
    const name = document.getElementById('taskName').value;
    const url = document.getElementById('taskUrl').value;
    const timerSelect = document.getElementById('taskTimer');
    
    if (!name || !url || !timerSelect.value) {
        tg.showAlert('Please fill in all fields');
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

// Update task counts
function updateTaskCounts() {
    document.getElementById('taskCount').textContent = `${tasks.length} tasks`;
    document.getElementById('runningTaskCount').textContent = `${runningTasks.length} running`;
    
    // Show/hide run all button based on tasks availability
    const runAllButton = document.getElementById('runAllButton');
    runAllButton.style.display = tasks.length > 0 ? 'block' : 'none';
}

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

// Initial render
renderTasks();

// Set Telegram WebApp theme
document.documentElement.style.setProperty('--tg-theme-bg-color', tg.themeParams.bg_color);
document.documentElement.style.setProperty('--tg-theme-text-color', tg.themeParams.text_color);
document.documentElement.style.setProperty('--tg-theme-button-color', tg.themeParams.button_color);
document.documentElement.style.setProperty('--tg-theme-button-text-color', tg.themeParams.button_text_color);
