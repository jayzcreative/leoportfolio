function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
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

