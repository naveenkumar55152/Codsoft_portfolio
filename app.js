document.addEventListener('DOMContentLoaded', () => {

    // 1. Header Scroll Effect
    const header = document.getElementById('site-header');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once in case page starts scrolled

    // 2. Mobile Navigation Toggle
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = mainNav.classList.toggle('open');
            mobileNavToggle.setAttribute('aria-expanded', isOpen);
            
            // Toggle hamburger icon animation or simple style
            const line2 = mobileNavToggle.querySelector('line:nth-child(2)');
            const line1 = mobileNavToggle.querySelector('line:nth-child(1)');
            const line3 = mobileNavToggle.querySelector('line:nth-child(3)');
            
            if (isOpen) {
                line2.style.opacity = '0';
                line1.style.transform = 'rotate(45deg) translate(5px, 5px)';
                line3.style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                line2.style.opacity = '1';
                line1.style.transform = 'none';
                line3.style.transform = 'none';
            }
        });

        // Close navigation menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('open')) {
                    mainNav.classList.remove('open');
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                    
                    const line2 = mobileNavToggle.querySelector('line:nth-child(2)');
                    const line1 = mobileNavToggle.querySelector('line:nth-child(1)');
                    const line3 = mobileNavToggle.querySelector('line:nth-child(3)');
                    line2.style.opacity = '1';
                    line1.style.transform = 'none';
                    line3.style.transform = 'none';
                }
            });
        });

        // Close menu if clicking outside header
        document.addEventListener('click', (e) => {
            if (!header.contains(e.target) && mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                
                const line2 = mobileNavToggle.querySelector('line:nth-child(2)');
                const line1 = mobileNavToggle.querySelector('line:nth-child(1)');
                const line3 = mobileNavToggle.querySelector('line:nth-child(3)');
                line2.style.opacity = '1';
                line1.style.transform = 'none';
                line3.style.transform = 'none';
            }
        });
    }

    // 3. Scroll Spy (Highlight active navigation item)
    const sections = document.querySelectorAll('section[id], main');
    const scrollSpy = () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 120; // offset for sticky header

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (currentSectionId && link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', scrollSpy);
    scrollSpy();

    // 4. Contact Form Interaction
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status-msg');
    const submitBtn = document.getElementById('form-submit-btn');

    if (contactForm && formStatus && submitBtn) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Set loading state
            submitBtn.disabled = true;
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';

            formStatus.style.display = 'none';
            formStatus.className = 'form-status-msg';

            // Simulate server request
            setTimeout(() => {
                // Success action
                formStatus.style.display = 'block';
                formStatus.classList.add('success');
                formStatus.textContent = 'Thank you! Your message has been sent successfully. I will get back to you shortly.';
                
                // Reset form fields
                contactForm.reset();
                
                // Reset button text
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;

                // Auto-fade status after 8 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 8000);

            }, 1200);
        });
    }
});
