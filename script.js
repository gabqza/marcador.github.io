let matchTime = 0;
let timerInterval = null;

// Función para iniciar el temporizador del tiempo del encuentro
function startTimer() {
  stopTimer(); // Detenemos el temporizador si ya estaba en marcha
  matchTime = parseInt(document.getElementById('matchTime').value) || 0;
  updateTimerDisplay();
  timerInterval = setInterval(updateTimer, 1000); // Actualizamos cada segundo (1000ms)
}

// Función para detener el temporizador
function stopTimer() {
  clearInterval(timerInterval);
}

// Función para actualizar el tiempo restante
function updateTimer() {
  if (matchTime > 0) {
    matchTime--;
    updateTimerDisplay();
  } else {
    stopTimer(); // Detenemos el temporizador si ha llegado a cero
  }
}

// Función para mostrar el tiempo restante en la página
function updateTimerDisplay() {
  const minutes = Math.floor(matchTime / 60);
  const seconds = matchTime % 60;
  document.getElementById('timerDisplay').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to toggle between dark and light modes
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
}

// Function to increment score
function incrementScore(teamId) {
  const scoreElement = document.getElementById(`${teamId}Score`);
  scoreElement.textContent = parseInt(scoreElement.textContent) + 1;
}

// Function to increment fouls
function incrementFoul(teamId) {
  // You can implement this function as per your requirement
  // For this example, I'll just increment a dummy foul count
  const foulCountElement = document.getElementById(`${teamId}FoulCount`);
  foulCountElement.textContent = parseInt(foulCountElement.textContent) + 1;
}

// Function to set team names
function setTeamNames() {
  const team1Name = document.getElementById('team1Name').value;
  const team2Name = document.getElementById('team2Name').value;

  document.getElementById('team1NameDisplay').textContent = team1Name;
  document.getElementById('team2NameDisplay').textContent = team2Name;
}

// Attach event listeners
document.getElementById('toggleTheme').addEventListener('click', toggleTheme);
document.getElementById('team1Name').addEventListener('change', setTeamNames);
document.getElementById('team2Name').addEventListener('change', setTeamNames);
document.getElementById('startTimerBtn').addEventListener('click', startTimer);
