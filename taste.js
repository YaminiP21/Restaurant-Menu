document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const slides = document.querySelectorAll('.menu-slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        updateNav(index);
    }

    function updateNav(index) {
        navLinks.forEach((link, i) => {
            if (i === index) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    function onScroll() {
        const scrollPos = window.scrollY + 100;
        slides.forEach((slide, index) => {
            if (slide.offsetTop <= scrollPos && slide.offsetTop + slide.offsetHeight > scrollPos) {
                showSlide(index);
            }
        });
    }

    // Initial call to show the first slide and set active nav link
    showSlide(0);

    // Smooth scrolling for nav links
    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSlide = document.getElementById(targetId);
            if (targetSlide) {
                targetSlide.scrollIntoView({
                    behavior: 'smooth'
                });
                showSlide(index); // Show the corresponding slide after scrolling
            }
        });
    });

    // Update active slide based on scroll position
    window.addEventListener('scroll', onScroll);
});
