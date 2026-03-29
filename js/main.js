/* ============================================
   EverGreen - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // Navigation scroll effect
  const nav = document.querySelector('.nav');

  function handleScroll() {
    if (window.scrollY > 50) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check on load

  // Mobile menu toggle with accessibility
  const menuToggle = document.querySelector('.nav__toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu__close');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu__links a');

  if (menuToggle && mobileMenu) {
    // Get all focusable elements in mobile menu
    const getFocusableElements = () => {
      return mobileMenu.querySelectorAll(
        'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
    };

    const openMenu = () => {
      mobileMenu.classList.add('mobile-menu--open');
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      // Focus first element in menu
      const focusable = getFocusableElements();
      if (focusable.length) focusable[0].focus();
    };

    const closeMenu = () => {
      mobileMenu.classList.remove('mobile-menu--open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      // Return focus to toggle button
      menuToggle.focus();
    };

    menuToggle.addEventListener('click', openMenu);
    mobileMenuClose.addEventListener('click', closeMenu);

    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('mobile-menu--open')) {
        closeMenu();
      }
    });

    // Focus trap within mobile menu
    mobileMenu.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;

      const focusable = getFocusableElements();
      const firstFocusable = focusable[0];
      const lastFocusable = focusable[focusable.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    });
  }

  // Fade in animations on scroll
  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => observer.observe(el));

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

  // Form submission handling (Web3Forms)
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const formError = document.getElementById('form-error');

  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Hide any previous messages
      if (formSuccess) formSuccess.style.display = 'none';
      if (formError) formError.style.display = 'none';

      try {
        const formData = new FormData(contactForm);
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (result.success) {
          // Hide form fields and show success
          const formGroups = contactForm.querySelectorAll('.form-group');
          formGroups.forEach(group => group.style.display = 'none');
          submitBtn.style.display = 'none';
          if (formSuccess) {
            formSuccess.style.display = 'block';
            formSuccess.style.textAlign = 'center';
            formSuccess.style.padding = '40px 0';
          }
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        if (formError) formError.style.display = 'block';
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      }
    });
  }

  // Image lazy loading (for browsers that don't support native lazy loading)
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  } else {
    // Fallback for older browsers
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }

  // Cookie Consent Banner
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieAccept = document.getElementById('cookie-accept');
  const cookieDecline = document.getElementById('cookie-decline');

  if (cookieBanner) {
    const cookieConsent = localStorage.getItem('cookie-consent');

    // Show banner if no consent decision has been made
    if (cookieConsent === null) {
      setTimeout(() => {
        cookieBanner.classList.add('cookie-banner--visible');
      }, 1000);
    }

    // Handle accept
    if (cookieAccept) {
      cookieAccept.addEventListener('click', () => {
        localStorage.setItem('cookie-consent', 'accepted');
        cookieBanner.classList.remove('cookie-banner--visible');
        // Here you would initialize analytics (GA4, etc.)
        // initializeAnalytics();
      });
    }

    // Handle decline
    if (cookieDecline) {
      cookieDecline.addEventListener('click', () => {
        localStorage.setItem('cookie-consent', 'declined');
        cookieBanner.classList.remove('cookie-banner--visible');
      });
    }
  }

});
