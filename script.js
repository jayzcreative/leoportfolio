  function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const btn = document.querySelector(".hamburger");

  nav.classList.toggle("show");
  btn.classList.toggle("active");
}

 // ===== SKILL BAR ANIMATION =====
const skillBars = document.querySelectorAll(".bar-fill");

const skillObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.level;
        skillObserver.unobserve(bar); // animate once
      }
    });
  },
  { threshold: 0.5 }
);

skillBars.forEach(bar => skillObserver.observe(bar));


//Hi leo appear as typying
document.addEventListener("DOMContentLoaded", function() {
  const text = "Hi, I'm Leo";
  const typingElement = document.getElementById("typing");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 150); // typing speed in ms
    }
  }

  type(); // start typing on page load

  
});

