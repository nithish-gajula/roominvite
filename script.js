const APP_LINK = "roomexpenses://invite";
const PLAYSTORE_LINK = "https://play.google.com/store/apps/details?id=com.nithishgajula.roomexpenses";
let countdown = 10;

// Try opening the app immediately
setTimeout(() => {
  window.location.href = APP_LINK;
}, 100);

// Countdown to Play Store redirect
const timerText = document.getElementById("timerText");
const timerInterval = setInterval(() => {
  countdown--;
  timerText.textContent = `Redirecting to Play Store in ${countdown} seconds...`;

  if (countdown <= 0) {
    clearInterval(timerInterval);
    window.location.href = PLAYSTORE_LINK;
  }
}, 1000);

// Manual button handlers
document.getElementById("openAppBtn").onclick = () => {
  window.location.href = APP_LINK;
};
document.getElementById("playStoreBtn").onclick = () => {
  window.location.href = PLAYSTORE_LINK;
};

