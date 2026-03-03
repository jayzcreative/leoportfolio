 document.addEventListener("DOMContentLoaded", () => {
    // --- 1. CONFIGURATION & SELECTORS ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const typingElement = document.getElementById("typing");
    const navDiv = document.querySelector("nav div");
    const skillBars = document.querySelectorAll('.bar-fill');
    
    // Updated Human/Professional phrases
    const phrases = [
        "Solved with Code.",
        "Delivered with Precision.",
        "Built to Perform."
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    // --- 2. MOBILE MENU LOGIC ---
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('open');
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        // Close menu when clicking a mobile link
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('open');
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });
    }

    // --- 3. REFINED TYPING EFFECT (Type & Delete Loop) ---
    function typeEffect() {
        if (!typingElement) return;

        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            // Speed up when deleting
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; 
        } else {
            // Normal typing speed
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        // State Management
        if (!isDeleting && charIndex === currentPhrase.length) {
            // End of phrase reached - Pause so they can read "Precision"
            isDeleting = true;
            typeSpeed = 2500; 
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting - Move to next phrase
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }
    
    // Start the loop
    typeEffect();

    // --- 4. SCROLL EFFECTS (Navbar & Skill Bars) ---
    const handleScroll = () => {
        // Navbar styling on scroll
        if (window.scrollY > 50) {
            navDiv?.classList.add("bg-black/80", "border-purple-500/20", "backdrop-blur-xl");
            // Add shadow for better depth when scrolling
            navDiv?.classList.add("shadow-lg", "shadow-purple-500/5");
        } else {
            navDiv?.classList.remove("bg-black/80", "border-purple-500/20", "backdrop-blur-xl");
            navDiv?.classList.remove("shadow-lg", "shadow-purple-500/5");
        }

        // Animate Technical Skill Bars when they enter the viewport
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            // Trigger when the bar is in the bottom 80% of the screen
            if (rect.top < window.innerHeight * 0.8 && rect.bottom >= 0) {
                const level = bar.getAttribute('data-level');
                bar.style.width = level;
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on load
    handleScroll();
});