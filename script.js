// GSAP animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.hello-box', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.2
});

gsap.from('.hero-name', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.4
});

gsap.from('.hero-title', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.6
});

gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.8
});

gsap.from('.hero-cta', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1
});

gsap.from('.hero-image-container', {
    opacity: 0,
    x: 50,
    duration: 1,
    delay: 0.6
});

gsap.from('.badge', {
    opacity: 0,
    scale: 0.5,
    duration: 0.8,
    delay: 1.2,
    stagger: 0.2
});

gsap.from('.geometric-shape', {
    opacity: 0,
    scale: 0,
    duration: 1,
    delay: 1.4,
    stagger: 0.2
});

// Parallax effect for hero image
gsap.to('.hero-image', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle (you'll need to add a menu toggle button in the HTML)
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });
}

// Portfolio section animations
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item, index) => {
    gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.1 * index,
        scrollTrigger: {
            trigger: item,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        }
    });
});

// Lazy loading for gallery images
const lazyLoadImages = () => {
    const images = document.querySelectorAll('.gallery-item img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
};

// Call the lazy loading function
lazyLoadImages();

// Add a simple filter functionality
const filterGallery = (category) => {
    galleryItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
};

// You can call filterGallery('category') to filter the gallery
// For example: filterGallery('photography');

// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
});

// Services section animations
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach((card, index) => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.1 * index,
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        }
    });
});

// About section animations
gsap.from('.about-image', {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
        trigger: '.about-content',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
    }
});

gsap.from('.about-text', {
    opacity: 0,
    x: 50,
    duration: 1,
    scrollTrigger: {
        trigger: '.about-content',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
    }
});

// Skills list animation
const skillItems = document.querySelectorAll('.skills-list li');

skillItems.forEach((item, index) => {
    gsap.from(item, {
        opacity: 0,
        x: -20,
        duration: 0.5,
        delay: 0.1 * index,
        scrollTrigger: {
            trigger: '.skills-list',
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        }
    });
});

// CTA button hover effect
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('mouseenter', () => {
    gsap.to(ctaButton, {
        scale: 1.05,
        duration: 0.3
    });
});

ctaButton.addEventListener('mouseleave', () => {
    gsap.to(ctaButton, {
        scale: 1,
        duration: 0.3
    });
});

// Contact form animation
const contactForm = document.querySelector('.contact-form');
const formGroups = contactForm.querySelectorAll('.form-group');

formGroups.forEach((group, index) => {
    gsap.from(group, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.1 * index,
        scrollTrigger: {
            trigger: contactForm,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        }
    });
});

// Form submission handling
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    // For this example, we'll just show a success message
    const formData = new FormData(this);
    const name = formData.get('name');
    
    // Animate form submission
    gsap.to(contactForm, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: () => {
            contactForm.innerHTML = `<h3>Thank you, ${name}!</h3><p>Your message has been sent. We'll get back to you soon.</p>`;
            gsap.from(contactForm.children, {
                opacity: 0,
                y: 20,
                duration: 0.5,
                stagger: 0.2
            });
        }
    });
});

// Footer animations
const footerElements = document.querySelectorAll('.footer-logo, .footer-nav, .social-icons, .copyright');

footerElements.forEach((element, index) => {
    gsap.from(element, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.1 * index,
        scrollTrigger: {
            trigger: 'footer',
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        }
    });
});

// Cursor effect
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => cursor.classList.add('click'));
document.addEventListener('mouseup', () => cursor.classList.remove('click'));

document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    element.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

