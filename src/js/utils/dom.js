/**
 * DOM utility functions
 * @module utils/dom
 */

/**
 * Query selector wrapper
 * @param {string} selector - CSS selector
 * @param {Element} context - Context element (default: document)
 * @returns {Element|null} Selected element
 */
export const $ = (selector, context = document) => {
  return context.querySelector(selector);
};

/**
 * Query selector all wrapper
 * @param {string} selector - CSS selector
 * @param {Element} context - Context element (default: document)
 * @returns {NodeList} Selected elements
 */
export const $$ = (selector, context = document) => {
  return context.querySelectorAll(selector);
};

/**
 * Create a new element with attributes and children
 * @param {string} tag - HTML tag name
 * @param {Object} attributes - Element attributes
 * @param {...(Element|string)} children - Child elements or text
 * @returns {Element} Created element
 */
export const createElement = (tag, attributes = {}, ...children) => {
  const element = document.createElement(tag);

  // Set attributes
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'className') {
      element.className = value;
    } else if (key === 'dataset') {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue;
      });
    } else if (key.startsWith('on') && typeof value === 'function') {
      const eventName = key.substring(2).toLowerCase();
      element.addEventListener(eventName, value);
    } else {
      element.setAttribute(key, value);
    }
  });

  // Append children
  children.forEach((child) => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof Element) {
      element.appendChild(child);
    }
  });

  return element;
};

/**
 * Add class to element
 * @param {Element} element - Target element
 * @param {...string} classNames - Class names to add
 */
export const addClass = (element, ...classNames) => {
  element.classList.add(...classNames);
};

/**
 * Remove class from element
 * @param {Element} element - Target element
 * @param {...string} classNames - Class names to remove
 */
export const removeClass = (element, ...classNames) => {
  element.classList.remove(...classNames);
};

/**
 * Toggle class on element
 * @param {Element} element - Target element
 * @param {string} className - Class name to toggle
 * @returns {boolean} True if class is now present
 */
export const toggleClass = (element, className) => {
  return element.classList.toggle(className);
};

/**
 * Check if element has class
 * @param {Element} element - Target element
 * @param {string} className - Class name to check
 * @returns {boolean} True if element has class
 */
export const hasClass = (element, className) => {
  return element.classList.contains(className);
};

/**
 * Add event listener with optional delegation
 * @param {Element|string} target - Target element or selector
 * @param {string} event - Event name
 * @param {Function|string} handler - Event handler or delegate selector
 * @param {Function} delegateHandler - Handler for delegated events
 */
export const on = (target, event, handler, delegateHandler) => {
  const element = typeof target === 'string' ? $(target) : target;
  
  if (!element) {
    return;
  }

  if (typeof handler === 'string') {
    // Delegated event
    element.addEventListener(event, (e) => {
      if (e.target.matches(handler)) {
        delegateHandler.call(e.target, e);
      }
    });
  } else {
    // Direct event
    element.addEventListener(event, handler);
  }
};

/**
 * Remove element from DOM
 * @param {Element} element - Element to remove
 */
export const remove = (element) => {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};

/**
 * Get element's offset from top of page
 * @param {Element} element - Target element
 * @returns {Object} Offset coordinates
 */
export const getOffset = (element) => {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset,
  };
};
