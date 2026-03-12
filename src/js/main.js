/**
 * Main JavaScript Entry Point
 * testboi4
 */

import { initNavigation } from './components/navigation.js';
import { initContactForm } from './components/contactForm.js';
import { updateCurrentYear } from './utils/helpers.js';
import { log } from './utils/logger.js';

/**
 * Initialize the application
 */
const initApp = () => {
  log('Initializing application...');

  // Initialize components
  initNavigation();
  initContactForm();

  // Update current year in footer
  updateCurrentYear();

  // Add event listener for CTA button
  const ctaButton = document.getElementById('cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', handleCtaClick);
  }

  // Add smooth scroll behavior for anchor links
  initSmoothScroll();

  log('Application initialized successfully');
};

/**
 * Handle CTA button click
 */
const handleCtaClick = () => {
  log('CTA button clicked');
  // Scroll to contact section
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Initialize smooth scrolling for anchor links
 */
const initSmoothScroll = () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      // Don't prevent default for # links
      if (href === '#') {
        return;
      }

      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Update active state in navigation
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach((navLink) => navLink.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });
};

/**
 * DOMContentLoaded event listener
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/**
 * Export for testing purposes
 */
export { initApp, handleCtaClick };
