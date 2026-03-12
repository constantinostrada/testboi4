/**
 * Main JavaScript Entry Point
 * Initializes the application and sets up event listeners
 */

import { handleFormSubmit } from './utils/form-handler.js';
import { smoothScroll } from './utils/smooth-scroll.js';
import { initializeApp } from './utils/init.js';

/**
 * DOM Content Loaded Event
 * Runs when the initial HTML document has been completely loaded
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the application
  initializeApp();

  // Set up smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach((link) => {
    link.addEventListener('click', smoothScroll);
  });

  // Set up contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }

  // Set up CTA button
  const ctaButton = document.getElementById('cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Log application start
  console.log('testboi4 application initialized successfully! 🚀');
});

/**
 * Window Load Event
 * Runs when the whole page has loaded, including all dependent resources
 */
window.addEventListener('load', () => {
  // Add any animations or final setup here
  document.body.classList.add('loaded');
});

/**
 * Export for potential module use
 */
export default {
  version: '1.0.0',
  name: 'testboi4',
};
