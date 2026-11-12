document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    const setMenu = (open) => {
        navLinks.classList.toggle('active', open);
        hamburger.classList.toggle('active', open);
        document.body.classList.toggle('menu-open', open);
        hamburger.setAttribute('aria-expanded', open);
        hamburger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    };

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            setMenu(!navLinks.classList.contains('active'));
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => setMenu(false));
        });

        // Close menu with Escape or by clicking outside of it
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                setMenu(false);
                hamburger.focus();
            }
        });

        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                setMenu(false);
            }
        });

        // Reset when going back to desktop width
        window.matchMedia('(min-width: 769px)').addEventListener('change', (e) => {
            if (e.matches) setMenu(false);
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    const updateNavbar = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    };

    if (navbar) {
        updateNavbar();
        window.addEventListener('scroll', updateNavbar, { passive: true });
    }
});
