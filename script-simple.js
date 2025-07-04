// Simplified version without complex animations
console.log('Simple script loaded');

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Ensure all content is visible
    document.querySelectorAll('.about-content, .skills-grid, .contact-content, .timeline-item, .skill-category, .about-text, .contact-info').forEach(el => {
        if (el) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });

    // Make sure skill tags are visible
    document.querySelectorAll('.skill-tag').forEach(tag => {
        if (tag) {
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }
    });

    console.log('All content should be visible now');
});

// Simple header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        const scrolled = window.pageYOffset;
        if (scrolled > 50) {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.9)';
        }
    }
});

// Console message
console.log('🚀 Danil Lobanov Portfolio - Simple Version Loaded!'); 