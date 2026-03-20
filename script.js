document.addEventListener("DOMContentLoaded", () => {
  const ambientSound = document.getElementById("ambientSound");
  const soundToggle = document.getElementById("soundToggle");
  const soundIcon = soundToggle?.querySelector(".sound-icon");
  const countdownContainer = document.getElementById("greetingPreview");

  let isPlaying = true;

  if (ambientSound) {
    ambientSound.volume = 0.35;

    ambientSound.play().catch(() => {
      isPlaying = false;
      if (soundIcon) soundIcon.textContent = "🔈";
    });
  }

  if (soundToggle) {
    soundToggle.addEventListener("click", () => {
      if (!ambientSound) return;

      if (isPlaying) {
        ambientSound.pause();
        if (soundIcon) soundIcon.textContent = "🔈";
      } else {
        ambientSound.play();
        if (soundIcon) soundIcon.textContent = "🔊";
      }

      isPlaying = !isPlaying;
    });
  }

  function createParticle() {
    const particle = document.createElement("div");
    particle.className = "sparkle";

    const size = Math.random() * 6 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * window.innerWidth}px`;
    particle.style.top = `${Math.random() * window.innerHeight}px`;

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1600);
  }

  setInterval(() => {
    if (Math.random() > 0.72) {
      createParticle();
    }
  }, 180);

  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".hero-card", {
      delay: 200,
      distance: "40px",
      origin: "bottom",
      duration: 1200,
      easing: "ease-out",
      reset: false
    });

    ScrollReveal().reveal(".section", {
      delay: 200,
      distance: "40px",
      origin: "bottom",
      duration: 1000,
      interval: 180,
      easing: "ease-out",
      reset: false
    });

    ScrollReveal().reveal(".arabic-text, .wishes, .credit, .badge", {
      delay: 300,
      distance: "25px",
      origin: "bottom",
      duration: 1000,
      easing: "ease-out",
      reset: false
    });
  }

  if (typeof Typed !== "undefined") {
    new Typed(".typed-text", {
      strings: [
        "May Allah bless you with happiness",
        "Wishing you peace and prosperity",
        "Sending warm wishes on this blessed day",
        "May your home be filled with joy and barakah"
      ],
      typeSpeed: 45,
      backSpeed: 26,
      backDelay: 1800,
      loop: true
    });
  }

  const eidDate = new Date("2026-03-21T06:45:00");

  function updateCountdown() {
    const now = new Date();
    const difference = eidDate - now;

    if (!countdownContainer) return;

    if (difference <= 0) {
      countdownContainer.style.display = "block";
      countdownContainer.innerHTML = `
        <h3>Eid Mubarak! 🌙</h3>
        <div class="celebration-message">
          <p>The blessed day of Eid has arrived. May this special day bring peace, happiness, love, and countless blessings to all.</p>
          <div class="countdown-grid">
            <div class="countdown-item">
              <span class="countdown-value">🌙</span>
              <span class="countdown-label">Eid</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-value">🕌</span>
              <span class="countdown-label">Prayer</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-value">🤍</span>
              <span class="countdown-label">Peace</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-value">✨</span>
              <span class="countdown-label">Blessings</span>
            </div>
          </div>
        </div>
      `;
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdownContainer.style.display = "block";
    countdownContainer.innerHTML = `
      <h3>Countdown to Eid</h3>
      <div class="countdown-grid">
        <div class="countdown-item">
          <span class="countdown-value">${days}</span>
          <span class="countdown-label">Days</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-value">${hours}</span>
          <span class="countdown-label">Hours</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-value">${minutes}</span>
          <span class="countdown-label">Minutes</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-value">${seconds}</span>
          <span class="countdown-label">Seconds</span>
        </div>
      </div>
    `;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
