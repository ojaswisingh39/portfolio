document.addEventListener("DOMContentLoaded", function () {
  // Door animation
  const doorContainer = document.getElementById("door-container");
  const door = document.querySelector(".door");
  const mainContent = document.getElementById("main-content");

  doorContainer.addEventListener("click", function () {
    // Open the door
    door.style.transform = "rotateY(90deg)";

    // After door animation completes, hide door container and show main content
    setTimeout(function () {
      doorContainer.classList.add("hidden");
      mainContent.classList.remove("hidden");

      // Fade in main content
      setTimeout(function () {
        mainContent.classList.add("active");

        // Initialize animations
        initAnimations();

        // Show avatar and hand after a delay
        setTimeout(function () {
          document.getElementById("avatar-popup").classList.add("active");
          document.getElementById("moving-hand").classList.add("active");
        }, 2000);
      }, 100);
    }, 1500);
  });

  // Mobile menu toggle
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  // Circular text around logo
  const canvas = document.getElementById("circular-logo");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 50;

    ctx.font = "12px Inter";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#3B82F6";

    const text = " OJASWI SINGH • PORTFOLIO • CREATIVE • DESIGN •";
    const textLength = text.length;
    const angleStep = (2 * Math.PI) / textLength;

    for (let i = 0; i < textLength; i++) {
      const angle = i * angleStep - Math.PI / 2; // Start from top
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle + Math.PI / 2);
      ctx.fillText(text[i], 0, 0);
      ctx.restore();
    }
  }

  // Video play buttons
  const playButtons = document.querySelectorAll(".play-button");
  const videos = document.querySelectorAll(".project-video");

  playButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      if (videos[index].paused) {
        videos[index].play();
        button.classList.add("playing");
      } else {
        videos[index].pause();
        button.classList.remove("playing");
      }
    });

    videos[index].addEventListener("ended", function () {
      button.classList.remove("playing");
    });
  });

  // Scroll animations
  function checkScrollAnimations() {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        section.classList.add("active");
      }
    });
  }

  // Initialize animations
  function initAnimations() {
    // Set current year in footer
    document.getElementById("current-year").textContent =
      new Date().getFullYear();

    // Check for scroll animations
    checkScrollAnimations();

    // Listen for scroll events
    window.addEventListener("scroll", checkScrollAnimations);
  }

  // Avatar popup interaction
  const girlAvatar = document.querySelector(".girl-avatar");
  const avatarMessage = document.getElementById("avatar-message");

  const messages = [
    "Hi! Welcome to my website!",
    "Feel free to explore my work!",
    "Need any help? Just ask!",
    "Thanks for visiting my portfolio!",
  ];

  let messageIndex = 0;

  girlAvatar.addEventListener("click", function () {
    messageIndex = (messageIndex + 1) % messages.length;

    // Fade out
    avatarMessage.style.opacity = "0";

    setTimeout(function () {
      // Change text and fade in
      avatarMessage.textContent = messages[messageIndex];
      avatarMessage.style.opacity = "1";
    }, 300);
  });
});
