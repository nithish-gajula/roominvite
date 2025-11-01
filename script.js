// Extract the roomId from the URL (after "?")
const query = window.location.search.substring(1); // e.g. "?abcd123" → "abcd123"
const roomId = query || ""; // fallback if no query
const APP_LINK = `roomexpenses://invite?roomId=${roomId}`;
const PLAYSTORE_LINK = "https://play.google.com/store/apps/details?id=com.nithishgajula.roomexpenses";
let countdown = 15;

// Try opening the app immediately with the roomId
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

