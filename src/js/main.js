/**
 * Main JavaScript Entry Point
 * @module main
 */

import { debounce, formatNumber } from './utils.js';

/**
 * Application state
 */
const state = {
  counter: 0,
};

/**
 * Initialize the application
 */
const init = () => {
  console.log('Application initialized');
  setupEventListeners();
  setupSmoothScroll();
};

/**
 * Set up all event listeners
 */
const setupEventListeners = () => {
  // Counter functionality
  const incrementBtn = document.getElementById('incrementBtn');
  const resetBtn = document.getElementById('resetBtn');
  const ctaButton = document.getElementById('ctaButton');

  if (incrementBtn) {
    incrementBtn.addEventListener('click', handleIncrement);
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', handleReset);
  }

  if (ctaButton) {
    ctaButton.addEventListener('click', handleCTA);
  }

  // Window resize handler with debounce
  window.addEventListener('resize', debounce(handleResize, 250));

  // Log page visibility changes
  document.addEventListener('visibilitychange', handleVisibilityChange);
};

/**
 * Set up smooth scrolling for anchor links
 */
const setupSmoothScroll = () => {
  const navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');

      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    });
  });
};

/**
 * Handle counter increment
 */
const handleIncrement = () => {
  state.counter += 1;
  updateCounterDisplay();
};

/**
 * Handle counter reset
 */
const handleReset = () => {
  state.counter = 0;
  updateCounterDisplay();
};

/**
 * Update the counter display
 */
const updateCounterDisplay = () => {
  const counterValue = document.getElementById('counterValue');

  if (counterValue) {
    counterValue.textContent = formatNumber(state.counter);

    // Add animation class
    counterValue.classList.add('animate');
    setTimeout(() => {
      counterValue.classList.remove('animate');
    }, 300);
  }
};

/**
 * Handle CTA button click
 */
const handleCTA = () => {
  alert('Welcome to testboi4! 🚀\n\nThis is a production-ready boilerplate project.');
};

/**
 * Handle window resize
 */
const handleResize = () => {
  const width = window.innerWidth;
  console.log(`Window resized to: ${width}px`);
};

/**
 * Handle page visibility change
 */
const handleVisibilityChange = () => {
  if (document.hidden) {
    console.log('Page is hidden');
  } else {
    console.log('Page is visible');
  }
};

/**
 * Add simple animation to counter
 */
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
  
  .counter__value.animate {
    animation: pulse 0.3s ease-in-out;
  }
`;
document.head.appendChild(style);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for testing purposes
export { init, state };
