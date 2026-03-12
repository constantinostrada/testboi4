/**
 * Main Application Entry Point
 * Initializes all application modules and event listeners
 */

import { debounce, formatNumber } from './utils.js';

// Application state
const state = {
  counter: 0,
};

/**
 * Initialize the application
 */
function init() {
  console.log('Application initialized');
  setupEventListeners();
  loadSavedState();
  addAnimations();
}

/**
 * Setup all event listeners
 */
function setupEventListeners() {
  // CTA Button
  const ctaButton = document.getElementById('cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', handleCTAClick);
  }

  // Counter Controls
  const incrementBtn = document.getElementById('increment-btn');
  const decrementBtn = document.getElementById('decrement-btn');
  const resetBtn = document.getElementById('reset-btn');

  if (incrementBtn) {
    incrementBtn.addEventListener('click', incrementCounter);
  }
  if (decrementBtn) {
    decrementBtn.addEventListener('click', decrementCounter);
  }
  if (resetBtn) {
    resetBtn.addEventListener('click', resetCounter);
  }

  // Navigation smooth scroll
  setupSmoothScroll();

  // Window resize handler (debounced)
  window.addEventListener('resize', debounce(handleResize, 250));

  // Save state on page unload
  window.addEventListener('beforeunload', saveState);
}

/**
 * Handle CTA button click
 */
function handleCTAClick() {
  const message = 'Welcome to testboi4! This is a demo application.';
  alert(message);
  console.log('CTA button clicked');
}

/**
 * Increment counter
 */
function incrementCounter() {
  state.counter += 1;
  updateCounterDisplay();
  saveState();
}

/**
 * Decrement counter
 */
function decrementCounter() {
  state.counter -= 1;
  updateCounterDisplay();
  saveState();
}

/**
 * Reset counter to zero
 */
function resetCounter() {
  state.counter = 0;
  updateCounterDisplay();
  saveState();
}

/**
 * Update counter display
 */
function updateCounterDisplay() {
  const counterElement = document.getElementById('counter');
  if (counterElement) {
    counterElement.textContent = formatNumber(state.counter);
    
    // Add animation class
    counterElement.classList.remove('fade-in');
    void counterElement.offsetWidth; // Trigger reflow
    counterElement.classList.add('fade-in');
  }
}

/**
 * Setup smooth scroll for navigation links
 */
function setupSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');
      
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
    });
  });
}

/**
 * Handle window resize
 */
function handleResize() {
  console.log('Window resized:', {
    width: window.innerWidth,
    height: window.innerHeight,
  });
}

/**
 * Save application state to localStorage
 */
function saveState() {
  try {
    localStorage.setItem('appState', JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save state:', error);
  }
}

/**
 * Load saved state from localStorage
 */
function loadSavedState() {
  try {
    const savedState = localStorage.getItem('appState');
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      state.counter = parsedState.counter || 0;
      updateCounterDisplay();
    }
  } catch (error) {
    console.error('Failed to load saved state:', error);
  }
}

/**
 * Add entrance animations to elements
 */
function addAnimations() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  // Observe feature cards
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => observer.observe(card));
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for testing purposes
export { state, incrementCounter, decrementCounter, resetCounter };
