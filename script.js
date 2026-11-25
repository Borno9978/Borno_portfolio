document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    // Sticky Navbar Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active Nav Link Highlighting on Scroll
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 160;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    // Smooth Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Contact Form Submission Feedback
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        formStatus.textContent = `Thanks, ${name}! Your message has been sent successfully.`;
        contactForm.reset();

        setTimeout(() => {
            formStatus.textContent = '';
        }, 5000);
    });
});
// Tool Pill Border Highlight on Click
    const toolPills = document.querySelectorAll('.tool-pill');
    toolPills.forEach(pill => {
        pill.addEventListener('click', () => {
            pill.classList.toggle('active-pill');
        });
    });
    // Explore More Projects Toggle
    const toggleProjectsBtn = document.getElementById('toggle-projects-btn');
    const extraProjects = document.querySelectorAll('.extra-project');

    if (toggleProjectsBtn) {
        toggleProjectsBtn.addEventListener('click', () => {
            const isExpanded = toggleProjectsBtn.classList.toggle('expanded');

            extraProjects.forEach(project => {
                project.classList.toggle('show', isExpanded);
            });

            if (isExpanded) {
                toggleProjectsBtn.innerHTML = 'Show Less Projects <i class="ri-arrow-up-s-line"></i>';
            } else {
                toggleProjectsBtn.innerHTML = 'Explore More Projects <i class="ri-arrow-down-s-line"></i>';
            }
        });
    }
    document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    // Sticky Navbar & Active Link Highlight
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 160;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Mobile Menu Toggle
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }

    // Smooth Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Contact Form Submission Feedback
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('name');
            const name = nameInput ? nameInput.value.trim() : 'there';
            formStatus.textContent = `Thanks, ${name}! Your message has been sent successfully.`;
            contactForm.reset();

            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        });
    }

    // Tool Pill Border Highlight on Click
    const toolPills = document.querySelectorAll('.tool-pill');
    toolPills.forEach(pill => {
        pill.addEventListener('click', () => {
            pill.classList.toggle('active-pill');
        });
    });

    // View More Projects Toggle
    const toggleProjectsBtn = document.getElementById('toggle-projects-btn');
    const extraProjects = document.querySelectorAll('.extra-project');
    const projectsSection = document.getElementById('projects');

    if (toggleProjectsBtn && extraProjects.length > 0) {
        let isExpanded = false;

        toggleProjectsBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;

            extraProjects.forEach(project => {
                if (isExpanded) {
                    project.classList.add('show');
                } else {
                    project.classList.remove('show');
                }
            });

            if (isExpanded) {
                toggleProjectsBtn.innerHTML = 'Show Less Projects <i class="ri-arrow-up-line"></i>';
            } else {
                toggleProjectsBtn.innerHTML = 'View More Projects <i class="ri-arrow-right-up-line"></i>';
                if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
});