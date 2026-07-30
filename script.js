// SAYAN Tours & Travels

document.addEventListener("DOMContentLoaded", () => {
  console.log("SAYAN Tours & Travels Website Loaded");

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Welcome message
  setTimeout(() => {
    console.log("Welcome to SAYAN Tours & Travels");
  }, 1000);
});