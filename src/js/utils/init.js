/**
 * Application Initialization
 * Sets up initial state and configurations
 */

/**
 * Initialize the application
 */
export function initializeApp() {
  // Set initial theme (could be extended to support dark mode)
  setTheme();

  // Initialize any third-party libraries
  initializeLibraries();

  // Set up global error handling
  setupErrorHandling();

  // Check browser compatibility
  checkBrowserCompatibility();
}

/**
 * Set application theme
 */
function setTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
}

/**
 * Initialize third-party libraries
 */
function initializeLibraries() {
  // Add initialization for any third-party libraries here
  // Example: analytics, monitoring, etc.
}

/**
 * Set up global error handling
 */
function setupErrorHandling() {
  window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // You can add error reporting here
  });

  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    // You can add error reporting here
  });
}

/**
 * Check browser compatibility
 */
function checkBrowserCompatibility() {
  const isModernBrowser = 'IntersectionObserver' in window &&
    'fetch' in window &&
    'Promise' in window;

  if (!isModernBrowser) {
    console.warn('Some features may not work in this browser. Please upgrade to a modern browser.');
  }
}

/**
 * Get application configuration
 */
export function getConfig() {
  return {
    name: 'testboi4',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  };
}
