  function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const btn = document.querySelector(".hamburger");

  nav.classList.toggle("show");
  btn.classList.toggle("active");
}


 // ===== SKILL BAR ANIMATION =====
 
document.querySelectorAll('.bar-fill').forEach(bar => {
  bar.style.width = bar.getAttribute('data-level');
});
//Circle
 document.querySelectorAll('.prof-skill').forEach(skill => {
    const percent = skill.dataset.percentage;
    const circle = skill.querySelector('.progress-ring__circle');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset =
      circumference - (percent / 100) * circumference;
  });




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

  type();  

  
});


