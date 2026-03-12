/**
 * Main JavaScript Entry Point
 * testboi4
 */

import { Counter } from './utils/counter.js';
import { handleCTAClick, initNavigation } from './utils/ui.js';

/**
 * Initialize the application
 */
function init() {
  console.log('Application initialized');

  // Initialize counter
  const counter = new Counter();
  setupCounterHandlers(counter);

  // Initialize UI components
  setupUIHandlers();

  // Initialize navigation
  initNavigation();

  // Add any other initialization code here
  setupEventListeners();
}

/**
 * Setup counter event handlers
 * @param {Counter} counter - Counter instance
 */
function setupCounterHandlers(counter) {
  const incrementBtn = document.getElementById('increment');
  const decrementBtn = document.getElementById('decrement');
  const counterValue = document.getElementById('counter-value');

  if (incrementBtn && decrementBtn && counterValue) {
    incrementBtn.addEventListener('click', () => {
      counter.increment();
      updateCounterDisplay(counter, counterValue);
    });

    decrementBtn.addEventListener('click', () => {
      counter.decrement();
      updateCounterDisplay(counter, counterValue);
    });
  }
}

/**
 * Update counter display
 * @param {Counter} counter - Counter instance
 * @param {HTMLElement} element - Element to update
 */
function updateCounterDisplay(counter, element) {
  element.textContent = counter.getValue();

  // Add animation class
  element.classList.add('counter-update');
  setTimeout(() => {
    element.classList.remove('counter-update');
  }, 300);
}

/**
 * Setup UI event handlers
 */
function setupUIHandlers() {
  const ctaButton = document.getElementById('cta-button');

  if (ctaButton) {
    ctaButton.addEventListener('click', handleCTAClick);
  }
}

/**
 * Setup additional event listeners
 */
function setupEventListeners() {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // Log when page is fully loaded
  window.addEventListener('load', () => {
    console.log('Page fully loaded');
  });
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for potential use in other modules
export { init };
