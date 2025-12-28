// ===================================
// Wait for DOM to be fully loaded
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Dark Mode Toggle
    // ===================================
    
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme on load
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Change icon
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // ===================================
    // Navigation Functionality
    // ===================================
    
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when link is clicked
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // ===================================
    // Active Navigation Link on Scroll
    // ===================================
    
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // ===================================
    // Typing Animation Effect
    // ===================================
    
    const typedTextSpan = document.querySelector('.typed-text');
    const textArray = [
        'Freelancer & AI-Assisted Developer'
    ];

    const typingDelay = 100;
    const erasingDelay = 60;
    const newTextDelay = 1500;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) {
                textArrayIndex = 0;
            }
            setTimeout(type, typingDelay + 500);
        }
    }
    
    // Start typing animation after a short delay
    setTimeout(type, newTextDelay + 250);

    // ===================================
    // Report Viewer Toggle
    // ===================================

    const viewOnlineBtn = document.getElementById('viewOnlineBtn');
    const closeViewer = document.getElementById('closeViewer');
    const reportViewer = document.getElementById('reportViewer');
    const thesisSection = document.getElementById('thesis');

    if (viewOnlineBtn && reportViewer) {
        viewOnlineBtn.addEventListener('click', function() {
            reportViewer.style.display = 'block';
            setTimeout(() => {
                reportViewer.scrollIntoView({behavior: 'smooth', block: 'start'});
            }, 100);
        });
    }

    if (closeViewer && reportViewer) {
        closeViewer.addEventListener('click', function() {
            reportViewer.style.display = 'none';
            if (thesisSection) {
                thesisSection.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        });
    }

    // ===================================
    // Task Management System Viewer Toggle
    // ===================================

    const viewTaskManagementBtn = document.getElementById('viewTaskManagementBtn');
    const closeTaskManagementViewer = document.getElementById('closeTaskManagementViewer');
    const taskManagementViewer = document.getElementById('taskManagementViewer');

    if (viewTaskManagementBtn && taskManagementViewer) {
        viewTaskManagementBtn.addEventListener('click', function() {
            taskManagementViewer.style.display = 'block';
            setTimeout(() => {
                taskManagementViewer.scrollIntoView({behavior: 'smooth', block: 'start'});
            }, 100);
        });
    }

    if (closeTaskManagementViewer && taskManagementViewer) {
        closeTaskManagementViewer.addEventListener('click', function() {
            taskManagementViewer.style.display = 'none';
            if (thesisSection) {
                thesisSection.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        });
    }

    // ===================================
    // Data Analysis Viewer Toggle
    // ===================================

    const viewDataAnalysisBtn = document.getElementById('viewDataAnalysisBtn');
    const closeDataAnalysisViewer = document.getElementById('closeDataAnalysisViewer');
    const dataAnalysisViewer = document.getElementById('dataAnalysisViewer');

    if (viewDataAnalysisBtn && dataAnalysisViewer) {
        viewDataAnalysisBtn.addEventListener('click', function() {
            dataAnalysisViewer.style.display = 'block';
            setTimeout(() => {
                dataAnalysisViewer.scrollIntoView({behavior: 'smooth', block: 'start'});
            }, 100);
        });
    }

    if (closeDataAnalysisViewer && dataAnalysisViewer) {
        closeDataAnalysisViewer.addEventListener('click', function() {
            dataAnalysisViewer.style.display = 'none';
            if (thesisSection) {
                thesisSection.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        });
    }

    // ===================================
    // Portfolio Design Viewer Toggle
    // ===================================

    const viewPortfolioDesignBtn = document.getElementById('viewPortfolioDesignBtn');
    const closePortfolioDesignViewer = document.getElementById('closePortfolioDesignViewer');
    const portfolioDesignViewer = document.getElementById('portfolioDesignViewer');

    if (viewPortfolioDesignBtn && portfolioDesignViewer) {
        viewPortfolioDesignBtn.addEventListener('click', function() {
            portfolioDesignViewer.style.display = 'block';
            setTimeout(() => {
                portfolioDesignViewer.scrollIntoView({behavior: 'smooth', block: 'start'});
            }, 100);
        });
    }

    if (closePortfolioDesignViewer && portfolioDesignViewer) {
        closePortfolioDesignViewer.addEventListener('click', function() {
            portfolioDesignViewer.style.display = 'none';
            if (thesisSection) {
                thesisSection.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        });
    }

    // ===================================
    // Portfolio Docs Viewer Toggle
    // ===================================

    const viewPortfolioDocsBtn = document.getElementById('viewPortfolioDocsBtn');
    const closePortfolioDocsViewer = document.getElementById('closePortfolioDocsViewer');
    const portfolioDocsViewer = document.getElementById('portfolioDocsViewer');

    if (viewPortfolioDocsBtn && portfolioDocsViewer) {
        viewPortfolioDocsBtn.addEventListener('click', function() {
            portfolioDocsViewer.style.display = 'block';
            setTimeout(() => {
                portfolioDocsViewer.scrollIntoView({behavior: 'smooth', block: 'start'});
            }, 100);
        });
    }

    if (closePortfolioDocsViewer && portfolioDocsViewer) {
        closePortfolioDocsViewer.addEventListener('click', function() {
            portfolioDocsViewer.style.display = 'none';
            if (thesisSection) {
                thesisSection.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        });
    }
    
    // ===================================
    // Smooth Scroll for Navigation Links
    // ===================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===================================
    // Scroll Reveal Animations
    // ===================================
    
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-fade, .reveal-scale');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    
    // Initial check on page load
    revealOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // ===================================
    // Back to Top Button
    // ===================================
    
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ===================================
    // Contact Form Handling
    // ===================================
    
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (name && email && subject && message) {
            // Create FormData to send
            const formData = new FormData(contactForm);
            
            // Show success message with styling
            const successDiv = document.createElement('div');
            successDiv.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background-color: #4CAF50;
                color: white;
                padding: 20px 30px;
                border-radius: 8px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                font-size: 16px;
                font-weight: 600;
                z-index: 9999;
                animation: slideIn 0.5s ease;
            `;
            successDiv.textContent = '✓ Message sent successfully!';
            document.body.appendChild(successDiv);
            
            // Remove success message after 4 seconds
            setTimeout(() => {
                successDiv.style.animation = 'slideOut 0.5s ease';
                setTimeout(() => successDiv.remove(), 500);
            }, 4000);
            
            // Reset form
            contactForm.reset();
            
            // Submit form to FormSubmit
            setTimeout(() => {
                contactForm.submit();
            }, 1000);
        } else {
            alert('Please fill in all fields.');
        }
    });
    
    // ===================================
    // Navbar Background Change on Scroll
    // ===================================
    
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // ===================================
    // Project Card Hover Effect Enhancement
    // ===================================
    
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // ===================================
    // Skills Box Animation Enhancement
    // ===================================
    
    const skillBoxes = document.querySelectorAll('.skill-box');
    
    skillBoxes.forEach((box, index) => {
        // Add staggered animation delay
        box.style.animationDelay = `${index * 0.1}s`;
        
        // Add click effect
        box.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // ===================================
    // Project Links Click Prevention (Demo)
    // ===================================
    
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the link type from title attribute
            const linkType = this.getAttribute('title');
            alert(`${linkType} - This is a demo link. Replace with actual project links.`);
        });
    });
    
    // ===================================
    // Social Icons Animation
    // ===================================
    
    const socialIcons = document.querySelectorAll('.social-icon, .footer-icon, .hero-socials a');
    
    socialIcons.forEach(icon => {
        // Add random delay for floating effect
        const randomDelay = Math.random() * 2;
        icon.style.animationDelay = `${randomDelay}s`;
    });
    
    // ===================================
    // Parallax Effect for Featured Section
    // ===================================
    
    const featuredSection = document.querySelector('.featured-section');
    let parallaxEnabled = window.innerWidth > 992;

    function updateParallaxState() {
        parallaxEnabled = window.innerWidth > 992;
        if (!parallaxEnabled && featuredSection) {
            featuredSection.style.transform = '';
            featuredSection.style.opacity = '';
        }
    }

    updateParallaxState();
    window.addEventListener('resize', updateParallaxState);
    
    window.addEventListener('scroll', function() {
        if (!parallaxEnabled || !featuredSection) return;
        const scrolled = window.scrollY;
        
        if (scrolled < window.innerHeight) {
            featuredSection.style.transform = `translateY(${scrolled * 0.5}px)`;
            featuredSection.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
    
    // ===================================
    // Form Input Animation
    // ===================================
    
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.style.borderColor = '#FFD301';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
            if (!this.value) {
                this.style.borderColor = '#F2F3F4';
            }
        });
    });
    
    // ===================================
    // Dynamic Year in Footer
    // ===================================
    
    const footerText = document.querySelector('.footer-text p');
    const currentYear = new Date().getFullYear();
    footerText.textContent = `© ${currentYear} Abdullah Saad. All rights reserved.`;

    // Page fade-in
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // ===================================
    // Mouse Cursor Effect (Optional Enhancement)
    // ===================================
    
    // Create cursor followers for interactive buttons
    const interactiveElements = document.querySelectorAll('.btn, .project-card, .skill-box');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            document.body.style.cursor = 'pointer';
        });
        
        element.addEventListener('mouseleave', function() {
            document.body.style.cursor = 'default';
        });
    });
    
    // ===================================
    // Viewport Height Fix for Mobile
    // ===================================
    
    function setVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', setVH);
    
    // ===================================
    // Intersection Observer for Better Performance
    // ===================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all reveal elements
    document.querySelectorAll('.reveal-left, .reveal-right, .reveal-fade, .reveal-scale').forEach(element => {
        observer.observe(element);
    });
    
    // ===================================
    // Console Message
    // ===================================
    
    console.log('%c👋 Welcome to Abdullah Saad\'s Portfolio!', 'color: #FFD301; font-size: 20px; font-weight: bold;');

    // ===================================
    // Performance Optimization
    // ===================================

    // Preload critical images
    window.addEventListener('load', function() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    });

    // ===================================
    // Accessibility Enhancements
    // ===================================

    // Add keyboard navigation for project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const link = this.querySelector('.project-link');
                if (link) link.click();
            }
        });
    });

    // Add aria-labels for better screen reader support
    document.querySelectorAll('.social-icon, .footer-icon').forEach(icon => {
        const platform = icon.querySelector('i').className.split('fa-')[1];
        icon.setAttribute('aria-label', `Visit ${platform} profile`);
    });

    // ===================================
    // ACADEMIC SECTION - Tab Switching
    // ===================================
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show target content
            const targetContent = document.getElementById(targetTab + '-tab');
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // ===================================
    // ACADEMIC SECTION - Project Filtering
    // ===================================
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    const academicCards = document.querySelectorAll('.academic-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards
            academicCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ===================================
    // ACADEMIC SECTION - PDF Modal Viewer
    // ===================================
    
    const pdfModal = document.getElementById('pdfModal');
    const pdfModalFrame = document.getElementById('pdfModalFrame');
    const pdfModalTitle = document.getElementById('pdfModalTitle');
    const closePdfModal = document.getElementById('closePdfModal');
    const pdfDownloadBtn = document.getElementById('pdfDownloadBtn');

    // Function to open PDF modal
    function openPdfModal(pdfFile, title) {
        pdfModal.classList.add('active');
        pdfModalFrame.src = `assets/reports/${pdfFile}`;
        pdfModalTitle.textContent = title || 'Document Viewer';
        pdfDownloadBtn.href = `assets/reports/${pdfFile}`;
        pdfDownloadBtn.download = pdfFile;
        document.body.style.overflow = 'hidden';
    }

    // Function to close PDF modal
    function closePdfModalFunc() {
        pdfModal.classList.remove('active');
        pdfModalFrame.src = '';
        document.body.style.overflow = 'auto';
    }

    // Close modal button
    if (closePdfModal) {
        closePdfModal.addEventListener('click', closePdfModalFunc);
    }

    // Close modal on background click
    if (pdfModal) {
        pdfModal.addEventListener('click', function(e) {
            if (e.target === pdfModal) {
                closePdfModalFunc();
            }
        });
    }

    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && pdfModal && pdfModal.classList.contains('active')) {
            closePdfModalFunc();
        }
    });

    // Add click events to all PDF view buttons
    document.querySelectorAll('[data-pdf]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const pdfFile = this.getAttribute('data-pdf');
            const title = this.closest('.thesis-featured-card, .academic-card')?.querySelector('.thesis-title, .card-title')?.textContent || 'Document';
            openPdfModal(pdfFile, title);
        });
    });

}); // End of DOMContentLoaded

// ===================================
// End of Main JavaScript
// ===================================
