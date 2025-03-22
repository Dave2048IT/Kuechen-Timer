// Globale Timer-Verwaltung
const timers = {};
let timerCounter = 0;

// Globaler Interval, der jede Sekunde alle aktiven Timer aktualisiert
const globalInterval = setInterval(updateTimers, 1000);
document.getElementById("alarmSound").volume = 0.3;

// Aktualisiert alle aktiven Timer
function updateTimers() {
  for (const id in timers) {
    const timer = timers[id];
    if (timer.running) {
      if (timer.remainingSeconds > 0) {
        timer.remainingSeconds--;
        updateDisplay(id, timer.remainingSeconds);
      } else {
        timer.running = false;
        triggerAlarm(id);
        resetTimer(id);
      }
    }
  }
}

// Erzeugt einen neuen Timer und speichert ihn im globalen Objekt
function addNewTimer() {
  timerCounter++;
  const timerID = timerCounter;
  const initialMinutes = 0, initialSeconds = 30;
  const totalSeconds = initialMinutes * 60 + initialSeconds;

  timers[timerID] = {
    id: timerID,
    name: `Bestellung ${timerID}`,
    remainingSeconds: totalSeconds,
    running: false
  };

  const container = document.getElementById("timerContainer");
  const timerDiv = document.createElement("div");
  timerDiv.className = "timer";
  timerDiv.id = `timer-${timerID}`;
  timerDiv.innerHTML = `
    <input type="text" value="Bestellung ${timerID}" oninput="updateTimerName(${timerID}, this.value)">
    <br>
    <div class="time-inputs">
      <input type="number" id="minutes-${timerID}" value="${initialMinutes}" min="0" onchange="resetTimer(${timerID})"> Min.
      <input type="number" id="seconds-${timerID}" value="${initialSeconds}" min="0" max="59" onchange="resetTimer(${timerID})"> Sek.
    </div>
    <p id="display-${timerID}">${formatTime(totalSeconds)}</p>
    <button class="start" onclick="startTimer(${timerID})">Start</button>
    <button class="pause" onclick="pauseTimer(${timerID})">Pause</button>
    <button class="reset" onclick="resetTimer(${timerID})">Reset</button>
    <button class="delete" onclick="deleteTimer(${timerID})">Löschen</button>
  `;
  container.appendChild(timerDiv);
}

function startTimer(timerID) {
  if (!timers[timerID]) return;
  // Falls der Timer bereits läuft, passiert nichts.
  timers[timerID].running = true;
}

function pauseTimer(timerID) {
  if (!timers[timerID]) return;
  timers[timerID].running = false;
}

// Setzt den Timer basierend auf den Eingabefeldern zurück
function resetTimer(timerID) {
  if (!timers[timerID]) return;
  // Timer anhalten
  timers[timerID].running = false;
  try {
    const minutes = parseInt(document.getElementById(`minutes-${timerID}`).value, 10) || 0;
    const seconds = parseInt(document.getElementById(`seconds-${timerID}`).value, 10) || 0;
    const totalSeconds = minutes * 60 + seconds;
    timers[timerID].remainingSeconds = totalSeconds;
    updateDisplay(timerID, totalSeconds);
  } catch (error) {
    console.error(`Fehler beim Reset des Timers ${timerID}:`, error);
  }
}

// Aktualisiert die Anzeige des Timers
function updateDisplay(timerID, seconds) {
  const displayElem = document.getElementById(`display-${timerID}`);
  if (displayElem) {
    displayElem.textContent = formatTime(seconds);
  }
}

// Aktualisiert den Namen des Timers
function updateTimerName(timerID, name) {
  if (timers[timerID]) {
    timers[timerID].name = name;
  }
}

// Formatiert Sekunden im Format MM:SS
function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
}

// Löscht den Timer sowohl aus der DOM als auch aus dem globalen Objekt
function deleteTimer(timerID) {
  if (timers[timerID]) {
    timers[timerID].running = false;
    delete timers[timerID];
  }
  const timerElem = document.getElementById(`timer-${timerID}`);
  if (timerElem) {
    timerElem.remove();
  }
}

// Löst den Alarm aus, wenn der Timer abläuft, und übernimmt weitere Aktionen
function triggerAlarm(timerID) {
  const timer = timers[timerID];
  if (!timer) return;
  const timerElem = document.getElementById(`timer-${timerID}`);
  const timerName = timer.name || `Bestellung ${timerID}`;
  const currentTime = new Date();
  const formattedTime = `${String(currentTime.getHours()).padStart(2, '0')}:${String(currentTime.getMinutes()).padStart(2, '0')}:${String(currentTime.getSeconds()).padStart(2, '0')}`;

  // Alarmton abspielen, falls aktiviert und keine laufende Sprachausgabe existiert
  if (!window.speechSynthesis.speaking && document.getElementById("soundAlertToggle").checked) {
    document.getElementById("alarmSound").play();
  }
  setTimeout(() => { announceCompletion(timerName); }, 3000);
  logHistory(formattedTime, timerName);

  // Timer visuell hervorheben
  timerElem.classList.add("blink");
  setTimeout(() => { timerElem.classList.remove("blink"); }, 5000);
}

// Gibt per Sprachausgabe bekannt, dass der Timer abgelaufen ist
function announceCompletion(timerName) {
  const utterance = new SpeechSynthesisUtterance(`${timerName}, ist fertig.`);
  utterance.lang = 'de-DE';
  window.speechSynthesis.speak(utterance);
}

// Fügt einen Eintrag zum Verlauf hinzu
function logHistory(timeString, timerName) {
  const historyList = document.getElementById("historyList");
  const listItem = document.createElement("li");
  listItem.textContent = `${timeString} → "${timerName}" ist fertig.`;
  historyList.appendChild(listItem);
}
