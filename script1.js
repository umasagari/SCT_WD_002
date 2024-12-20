const timeDisplay = document.getElementById('time-display');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');
const logButton = document.getElementById('log-button');
const logList = document.getElementById('log-list');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

// Format time into HH:MM:SS.MMM
function formatTime(ms) {
  const date = new Date(ms);
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(ms % 1000).padStart(3, '0');
  return '${hours}:${minutes}:${seconds}.${milliseconds}';
}

// Start the stopwatch
startButton.addEventListener('click', () => {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timeDisplay.textContent = formatTime(elapsedTime);
  }, 10);
  startButton.disabled = true;
  pauseButton.disabled = false;
  resetButton.disabled = false;
  logButton.disabled = false;
});

// Pause the stopwatch
pauseButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  startButton.disabled = false;
  pauseButton.disabled = true;
});

// Reset the stopwatch
resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timeDisplay.textContent = '00:00:00.000';
  startButton.disabled = false;
  pauseButton.disabled = true;
  resetButton.disabled = true;
  logButton.disabled = true;
  logList.innerHTML = "log-list";
});

// Log the current time
logButton.addEventListener('click', () => {
  const logItem = document.createElement('li');
  logItem.textContent = Lap ,'${formatTime(elapsedTime)}';
  logList.appendChild(logItem);
});