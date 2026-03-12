/**
 * Main application entry point
 * @module main
 */

import { initializeApp } from './utils/app.js';
import { logger } from './utils/logger.js';

/**
 * Application state
 */
const state = {
  initialized: false,
  version: '1.0.0',
};

/**
 * Initialize event listeners
 */
const initEventListeners = () => {
  // CTA Button
  const ctaButton = document.getElementById('ctaButton');
  if (ctaButton) {
    ctaButton.addEventListener('click', handleCtaClick);
  }

  // Navigation links smooth scroll
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach((link) => {
    link.addEventListener('click', handleNavLinkClick);
  });

  // Window events
  window.addEventListener('load', handleWindowLoad);
  window.addEventListener('resize', handleWindowResize);
};

/**
 * Handle CTA button click
 * @param {Event} event - Click event
 */
const handleCtaClick = (event) => {
  event.preventDefault();
  logger.log('CTA button clicked');
  
  // Example: Show alert or navigate
  alert('Welcome to testboi4! Start building your application.');
};

/**
 * Handle navigation link clicks for smooth scrolling
 * @param {Event} event - Click event
 */
const handleNavLinkClick = (event) => {
  const href = event.target.getAttribute('href');
  
  if (href && href.startsWith('#')) {
    event.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
};

/**
 * Handle window load event
 */
const handleWindowLoad = () => {
  logger.log('Window loaded');
  document.body.classList.add('loaded');
};

/**
 * Handle window resize event
 */
let resizeTimeout;
const handleWindowResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    logger.log(`Window resized to ${window.innerWidth}x${window.innerHeight}`);
  }, 250);
};

/**
 * Main application initialization
 */
const main = () => {
  try {
    logger.log('Initializing testboi4...');
    
    // Initialize app utilities
    initializeApp();
    
    // Initialize event listeners
    initEventListeners();
    
    // Update state
    state.initialized = true;
    
    logger.log(`testboi4 v${state.version} initialized successfully`);
  } catch (error) {
    logger.error('Failed to initialize application:', error);
  }
};

// Start the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}

// Export for potential module usage
export { state };
