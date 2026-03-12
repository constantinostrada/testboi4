/**
 * Smooth Scroll Utilities
 * Functions for smooth scrolling navigation
 */

/**
 * Smooth scroll to target element
 * @param {Event} event - Click event
 */
export function smoothScroll(event) {
  const href = event.currentTarget.getAttribute('href');

  // Only handle internal links
  if (!href || !href.startsWith('#')) {
    return;
  }

  event.preventDefault();

  const targetId = href.substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    scrollToElement(targetElement);
  }
}

/**
 * Scroll to a specific element
 * @param {HTMLElement} element - Target element to scroll to
 * @param {Object} options - Scroll options
 */
export function scrollToElement(element, options = {}) {
  const defaultOptions = {
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  };

  const scrollOptions = { ...defaultOptions, ...options };

  element.scrollIntoView(scrollOptions);

  // Update URL hash without jumping
  if (element.id) {
    history.pushState(null, null, `#${element.id}`);
  }
}

/**
 * Scroll to top of page
 * @param {Object} options - Scroll options
 */
export function scrollToTop(options = {}) {
  const defaultOptions = {
    top: 0,
    behavior: 'smooth',
  };

  const scrollOptions = { ...defaultOptions, ...options };

  window.scrollTo(scrollOptions);
}

/**
 * Get current scroll position
 * @returns {Object} - Object with x and y scroll positions
 */
export function getScrollPosition() {
  return {
    x: window.pageXOffset || document.documentElement.scrollLeft,
    y: window.pageYOffset || document.documentElement.scrollTop,
  };
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} - True if element is in viewport
 */
export function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
