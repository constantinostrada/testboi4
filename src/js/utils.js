/**
 * Utility Functions
 * @module utils
 */

/**
 * Debounce function to limit the rate at which a function can fire
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @returns {Function} - The debounced function
 */
export const debounce = (func, wait = 300) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function to ensure a function is only called once per specified time period
 * @param {Function} func - The function to throttle
 * @param {number} limit - The time limit in milliseconds
 * @returns {Function} - The throttled function
 */
export const throttle = (func, limit = 300) => {
  let inThrottle;

  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

/**
 * Format a number with thousands separator
 * @param {number} num - The number to format
 * @returns {string} - The formatted number
 */
export const formatNumber = num => {
  return new Intl.NumberFormat('en-US').format(num);
};

/**
 * Format currency
 * @param {number} amount - The amount to format
 * @param {string} currency - The currency code (default: USD)
 * @returns {string} - The formatted currency
 */
export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

/**
 * Generate a random ID
 * @param {number} length - The length of the ID
 * @returns {string} - A random ID
 */
export const generateId = (length = 8) => {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};

/**
 * Validate email address
 * @param {string} email - The email address to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export const isValidEmail = email => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

/**
 * Deep clone an object
 * @param {Object} obj - The object to clone
 * @returns {Object} - The cloned object
 */
export const deepClone = obj => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Get a query parameter from the URL
 * @param {string} param - The parameter name
 * @returns {string|null} - The parameter value or null
 */
export const getQueryParam = param => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

/**
 * Set a query parameter in the URL
 * @param {string} param - The parameter name
 * @param {string} value - The parameter value
 */
export const setQueryParam = (param, value) => {
  const url = new URL(window.location.href);
  url.searchParams.set(param, value);
  window.history.pushState({}, '', url);
};

/**
 * Check if an element is in the viewport
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} - True if in viewport, false otherwise
 */
export const isInViewport = element => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Capitalize the first letter of a string
 * @param {string} str - The string to capitalize
 * @returns {string} - The capitalized string
 */
export const capitalize = str => {
  if (!str) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Truncate a string to a specified length
 * @param {string} str - The string to truncate
 * @param {number} length - The maximum length
 * @param {string} ending - The ending to append (default: '...')
 * @returns {string} - The truncated string
 */
export const truncate = (str, length, ending = '...') => {
  if (str.length <= length) {
    return str;
  }
  return str.substring(0, length - ending.length) + ending;
};

/**
 * Wait for a specified amount of time
 * @param {number} ms - The number of milliseconds to wait
 * @returns {Promise} - A promise that resolves after the specified time
 */
export const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Check if the code is running in a browser environment
 * @returns {boolean} - True if in browser, false otherwise
 */
export const isBrowser = () => {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
};

/**
 * Get the current date formatted as YYYY-MM-DD
 * @returns {string} - The formatted date
 */
export const getCurrentDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
