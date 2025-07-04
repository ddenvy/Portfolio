// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const header = document.querySelector('.header');

// Loading animation
document.addEventListener('DOMContentLoaded', () => {
    // Remove loading screen if exists
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.remove();
            }, 500);
        }, 1000);
    }

    // Ensure content is visible immediately
    showAllContent();

    // Initialize animations with delay
    setTimeout(() => {
        initScrollAnimations();
        initTypingAnimation();
    }, 100);
});

// Function to ensure all content is visible
function showAllContent() {
    const elements = document.querySelectorAll('.about-content, .skills-grid, .contact-content, .timeline-item, .skill-category, .about-text, .contact-info, .skill-tag, .languages');
    
    elements.forEach(el => {
        if (el) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.visibility = 'visible';
        }
    });
    
    console.log('All content made visible');
}

// Mobile Navigation Toggle
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

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

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

// Header background on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    if (scrolled > 50) {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.9)';
    }
});

// Active navigation highlighting
function updateActiveNavigation() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate timeline items
                if (entry.target.classList.contains('timeline-item')) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 100);
                }
                
                // Animate skill tags
                if (entry.target.classList.contains('skill-category')) {
                    const skillTags = entry.target.querySelectorAll('.skill-tag');
                    skillTags.forEach((tag, index) => {
                        setTimeout(() => {
                            tag.style.opacity = '1';
                            tag.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
                
                // Animate stats
                if (entry.target.classList.contains('stat')) {
                    animateCounter(entry.target);
                }
                
                // Animate other elements
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
            }
        });
    }, observerOptions);

    // Observe elements for animation (but don't hide them initially)
    document.querySelectorAll('.timeline-item, .skill-category, .stat, .about-text, .contact-content, .about-content, .skills-grid, .contact-info').forEach(el => {
        // Don't hide the elements initially
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Skill tags animation setup (but keep them visible)
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        // Keep skill tags visible
        tag.style.opacity = '1';
        tag.style.transform = 'translateY(0)';
    });
}

// Counter animation for stats
function animateCounter(element) {
    const numberElement = element.querySelector('.stat-number');
    const finalNumber = numberElement.textContent;
    const isPercentage = finalNumber.includes('%');
    const isPlusSign = finalNumber.includes('+');
    
    let numericValue = parseInt(finalNumber.replace(/[^0-9]/g, ''));
    
    if (isNaN(numericValue)) return;
    
    let currentNumber = 0;
    const increment = numericValue / 30;
    
    const timer = setInterval(() => {
        currentNumber += increment;
        
        if (currentNumber >= numericValue) {
            currentNumber = numericValue;
            clearInterval(timer);
        }
        
        let displayValue = Math.floor(currentNumber);
        
        if (isPercentage) {
            displayValue += '%';
        } else if (isPlusSign) {
            displayValue += '+';
        }
        
        numberElement.textContent = displayValue;
    }, 50);
}

// Typing animation for hero title
function initTypingAnimation() {
    const titleElement = document.querySelector('.hero-title');
    if (!titleElement) return;
    
    const originalText = titleElement.innerHTML;
    const nameSpan = titleElement.querySelector('.text-gradient');
    
    if (nameSpan) {
        const name = nameSpan.textContent;
        const beforeName = "Hi, I'm ";
        
        titleElement.innerHTML = beforeName + '<span class="text-gradient"></span>';
        const newNameSpan = titleElement.querySelector('.text-gradient');
        
        let index = 0;
        const typingSpeed = 150;
        
        function typeWriter() {
            if (index < name.length) {
                newNameSpan.textContent += name.charAt(index);
                index++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Add cursor blink effect
                newNameSpan.style.borderRight = '2px solid var(--primary-color)';
                newNameSpan.style.animation = 'blink 1s infinite';
                
                setTimeout(() => {
                    newNameSpan.style.borderRight = 'none';
                    newNameSpan.style.animation = 'none';
                }, 3000);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Smooth reveal animations on scroll
window.addEventListener('scroll', () => {
    updateActiveNavigation();
    
    // Parallax effect for hero background
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        heroSection.style.transform = `translateY(${rate}px)`;
    }
});

// Skill tag hover effects
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.05) translateY(-2px)';
        tag.style.boxShadow = '0 5px 15px rgba(59, 130, 246, 0.3)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1) translateY(0)';
        tag.style.boxShadow = 'none';
    });
});

// Contact link interactions
document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        const icon = link.querySelector('i');
        icon.style.transform = 'scale(1.1) rotate(10deg)';
        icon.style.transition = 'transform 0.3s ease';
    });
    
    link.addEventListener('mouseleave', () => {
        const icon = link.querySelector('i');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Achievement badges animation
document.querySelectorAll('.achievement').forEach(badge => {
    badge.addEventListener('mouseenter', () => {
        badge.style.transform = 'scale(1.1)';
        badge.style.transition = 'transform 0.2s ease';
    });
    
    badge.addEventListener('mouseleave', () => {
        badge.style.transform = 'scale(1)';
    });
});

// Add CSS for cursor blink animation
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0%, 50% { border-color: transparent; }
        51%, 100% { border-color: var(--primary-color); }
    }
    
    .nav-link.active {
        color: var(--primary-color) !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.loading');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }
});

// Performance optimization: throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    updateActiveNavigation();
}, 100));

// Ensure body is visible
document.body.style.opacity = '1';
document.body.style.transition = 'opacity 0.5s ease';

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    // Double-check content visibility
    showAllContent();
});

// Backup function to ensure content is always visible
setTimeout(() => {
    showAllContent();
    console.log('Backup content display executed');
}, 1000);

// Another backup after 3 seconds
setTimeout(() => {
    showAllContent();
    console.log('Final backup content display executed');
}, 3000);

// Console message for developers
console.log(`
🚀 Welcome to Danil Lobanov's Portfolio!
🔧 Built with HTML, CSS, and JavaScript
💼 Senior C# (.NET) Developer with 3+ years of experience
📧 Contact: danil.lobanov@outlook.com
🔗 LinkedIn: https://www.linkedin.com/in/envydany/
📱 Telegram: @envydany

Site features:
✨ Modern responsive design with C# branding
🎨 CSS animations and gradient effects
📱 Mobile-first approach
🎯 Smooth scrolling navigation
🔥 Interactive elements with hover effects

Looking for a talented C# developer? Let's connect!
`);