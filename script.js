/**
 * Naraender S. — Engineering Portfolio Interaction Scripts
 * Accessible navigation, scroll spy, dynamic year, and keyboard interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------------------
    // 1. Dynamic Footer Year
    // -------------------------------------------------------------------------
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // -------------------------------------------------------------------------
    // 2. Accessible Mobile Navigation
    // -------------------------------------------------------------------------
    const menuToggle = document.getElementById('menuToggle');
    const primaryNav = document.getElementById('primaryNav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && primaryNav) {
        const toggleMenu = (open) => {
            const isOpen = open !== undefined ? open : menuToggle.getAttribute('aria-expanded') === 'true';
            const nextState = !isOpen;

            menuToggle.setAttribute('aria-expanded', String(nextState));
            if (nextState) {
                primaryNav.classList.add('nav-open');
                document.body.style.overflow = 'hidden';
            } else {
                primaryNav.classList.remove('nav-open');
                document.body.style.overflow = '';
            }
        };

        menuToggle.addEventListener('click', () => {
            toggleMenu();
        });

        // Close navigation when a link is clicked
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (primaryNav.classList.contains('nav-open')) {
                    toggleMenu(false);
                    menuToggle.focus();
                }
            });
        });

        // Close on Escape key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && primaryNav.classList.contains('nav-open')) {
                toggleMenu(false);
                menuToggle.focus();
            }
        });

        // Close on resize beyond mobile breakpoint
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && primaryNav.classList.contains('nav-open')) {
                toggleMenu(false);
            }
        });
    }

    // -------------------------------------------------------------------------
    // 3. Scroll Spy for Active Navigation Highlight
    // -------------------------------------------------------------------------
    const sections = document.querySelectorAll('main > section[id]');
    
    if ('IntersectionObserver' in window && sections.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute('id');
                    navLinks.forEach((link) => {
                        const href = link.getAttribute('href');
                        if (href === `#${currentId}`) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach((section) => {
            observer.observe(section);
        });
    }
});
