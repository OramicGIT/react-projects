
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const minutesInpup = document.getElementById('minutes-input');
const submitBtn = document.getElementById('submit-btn');
const taskList = document.getElementById('task-list');
const toast = document.getElementById('toast');
const previewText = document.getElementById('preview-text');

function isFormValid() {
    const taskText = taskInput.value.trim();
    const minutesValue = parseInt(minutesInpup.value, 10); 
    const hasVilidMinutes = 
        Number.isFinite(minutesValue) && minutesValue > 0;

    return taskText !== '' && hasVilidMinutes;
}

function updateSubmitState() {
    submitBtn.disabled = !isFormValid();
}

taskInput.addEventListener('input', (e) => {
    const currentText = e.target.value;
    previewText.textContent = currentText || '...';

    updateSubmitState();
});

minutesInpup.addEventListener('input', ()=>{
    updateSubmitState();
});


taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    const minutesValue = parseInt(minutesInpup.value, 10); 
    const taskMinutes = 
        Number.isFinite(minutesValue) && minutesValue > 0 
        ? minutesValue: 0;

    if (taskText) {
        const li = document.createElement('li');
        li.className = 'task-item';

        const taskTitle = document.createElement('span');
        taskTitle.className = 'task-title';
        taskTitle.textContent = taskText;

        const taskTimer = document.createElement('span');
        taskTimer.className = 'task-timer';
        taskTimer.textContent = formatTaskTime(taskMinutes * 60);

        li.append(taskTitle, taskTimer);
        taskList.prepend(li);

        
    }

});

function formatTaskTime(seconds) {
    const minutes = 
        Math.floor(seconds / 60).toString().padStart(2, '0');
    const seconds = 
        (seconds % 60).toString().padStart(2, '0');    

    return `${minutes}:${seconds}`;
}