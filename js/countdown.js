// Set the wedding date
const weddingDate = new Date("September 12, 2026 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "It's Wedding Day! 🎉";
    return;
  }

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").innerHTML =
    `${days} Days To Go`;
}

// Update every second
setInterval(updateCountdown, 1000);
