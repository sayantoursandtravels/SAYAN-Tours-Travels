// Smooth scroll for menu links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Card animation on scroll
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";
  observer.observe(card);
});
.booking{
    padding:80px 8%;
    background:#0b245d;
    text-align:center;
}

.booking h2{
    color:#FFD54F;
    font-size:40px;
    margin-bottom:30px;
}

.booking form{
    max-width:700px;
    margin:auto;
}

.booking input,
.booking select,
.booking textarea{
    width:100%;
    padding:15px;
    margin:10px 0;
    border:none;
    border-radius:10px;
    font-size:16px;
}

.booking textarea{
    resize:vertical;
}

.booking button{
    width:100%;
    margin-top:15px;
}