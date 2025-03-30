
document.addEventListener('DOMContentLoaded', () => {
    // Audio Controls
    const ambientSound = document.getElementById('ambientSound');
    // const soundToggle = document.getElementById('soundToggle');
    // let isPlaying = true;
  
    // Auto-play sound
    ambientSound.play().catch(() => {
      isPlaying = false;
    });
  
    // soundToggle.addEventListener('click', () => {
    //   if (isPlaying) {
    //     ambientSound.pause();
    //     soundToggle.querySelector('.sound-icon').textContent = '🔈';
    //   } else {
    //     ambientSound.play();
    //     soundToggle.querySelector('.sound-icon').textContent = '🔊';
    //   }
    //   isPlaying = !isPlaying;
    // });
  
    // Enhanced particle effects
    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'sparkle';
      particle.style.width = Math.random() * 6 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.top = Math.random() * window.innerHeight + 'px';
      document.body.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 1500);
    }
  
    // Create particles automatically
    setInterval(createParticle, 200);
    // Initialize ScrollReveal
    ScrollReveal().reveal('h1', {
      delay: 200,
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
      easing: 'ease-out',
      reset: true
    });
  
    ScrollReveal().reveal('.arabic-text', {
      delay: 300,
      distance: '30px',
      origin: 'bottom',
      duration: 1000,
      easing: 'ease-out',
      reset: true
    });
  
    ScrollReveal().reveal('.wishes', {
      delay: 500,
      distance: '30px',
      origin: 'bottom',
      duration: 1000,
      easing: 'ease-out',
      reset: true
    });
  
    // Reveal content sections with cascade effect
    ScrollReveal().reveal('.section', {
      delay: 200,
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
      interval: 200,
      easing: 'ease-out',
      reset: true
    });
  
    ScrollReveal().reveal('.credit', {
      delay: 600,
      distance: '20px',
      origin: 'bottom',
      duration: 1000,
      easing: 'ease-out',
      reset: true
    });
  
    // Initialize Typed.js
    new Typed('.typed-text', {
      strings: [
        'May Allah bless you with happiness',
        'Wishing you peace and prosperity',
        'Sending warm wishes on this blessed day'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true
    });
  
    // Countdown Timer
    const countdownContainer = document.getElementById('greetingPreview');
    const eidDate = new Date('2025-03-31T05:30:00'); // Set to Fajr time on Eid
  
    function updateCountdown() {
      const now = new Date();
      const difference = eidDate - now;
  
      if (difference <= 0) {
        // Countdown has ended
        if (countdownContainer) {
          countdownContainer.style.display = 'block';
          countdownContainer.innerHTML = `
            <h3>Eid Mubarak!</h3>
            <div class="celebration-message">
              <p>The blessed day of Eid has arrived! May this special day bring peace, happiness, and blessings to all.</p>
              <div class="countdown-grid">
                <div class="countdown-item">
                  <span class="countdown-value">🌙</span>
                  <span class="countdown-label">Eid</span>
                </div>
                <div class="countdown-item">
                  <span class="countdown-value">🕌</span>
                  <span class="countdown-label">Mubarak</span>
                </div>
              </div>
            </div>
          `;
        }
        return;
      }
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      if (countdownContainer) {
        countdownContainer.style.display = 'block';
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
    }
  
    setInterval(updateCountdown, 1000);
    updateCountdown();
  
    // Greeting Cards Download
    document.querySelectorAll('.download-btn').forEach(button => {
      button.addEventListener('click', function() {
        const card = this.parentElement;
        const cardNumber = card.dataset.card;
        const cardImg = card.querySelector('img').src;
        
        // Create temporary link to download image
        const link = document.createElement('a');
        link.href = cardImg;
        link.download = `eid-card-${cardNumber}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    });
  
    // Automatic particle effect
    function createRandomParticle() {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.width = Math.random() * 8 + 2 + 'px';
      sparkle.style.height = sparkle.style.width;
      sparkle.style.left = Math.random() * window.innerWidth + 'px';
      sparkle.style.top = Math.random() * window.innerHeight + 'px';
      document.body.appendChild(sparkle);
      
      setTimeout(() => {
        sparkle.remove();
      }, 1500);
    }
  
    // Create particles at random intervals
    setInterval(() => {
      if (Math.random() > 0.7) {
        createRandomParticle();
      }
    }, 100);
  });