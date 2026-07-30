// SAYAN Tours & Travels JavaScript

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if(target){
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Header Shadow on Scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "#041d4d";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
  } else {
    header.style.background = "#06153a";
    header.style.boxShadow = "none";
  }
});

// Service Card Hover Animation
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.03)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// Gallery Click Effect
document.querySelectorAll(".gallery-grid img").forEach(img => {
  img.addEventListener("click", () => {
    window.open(img.src, "_blank");
  });
});

// Welcome Message
window.onload = function () {
  console.log("Welcome to SAYAN Tours & Travels");
};