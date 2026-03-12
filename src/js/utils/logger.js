/**
 * Logger Utility
 * Provides consistent logging across the application
 */

const LOG_LEVELS = {
  error: 'error',
  warn: 'warn',
  info: 'info',
  success: 'log',
  debug: 'log',
};

const LOG_STYLES = {
  error: 'color: #ef4444; font-weight: bold;',
  warn: 'color: #f59e0b; font-weight: bold;',
  info: 'color: #3b82f6;',
  success: 'color: #10b981; font-weight: bold;',
  debug: 'color: #6b7280;',
};

/**
 * Main log function
 */
export const log = (message, level = 'info') => {
  // Don't log in production unless it's an error or warning
  if (process.env.NODE_ENV === 'production' && !['error', 'warn'].includes(level)) {
    return;
  }

  const consoleMethod = LOG_LEVELS[level] || 'log';
  const style = LOG_STYLES[level] || '';

  if (typeof message === 'object') {
    console[consoleMethod]('%c[testboi4]', style, message);
  } else {
    console[consoleMethod](`%c[testboi4] ${message}`, style);
  }
};

/**
 * Convenience methods
 */
export const logger = {
  error: (message) => log(message, 'error'),
  warn: (message) => log(message, 'warn'),
  info: (message) => log(message, 'info'),
  success: (message) => log(message, 'success'),
  debug: (message) => log(message, 'debug'),
};

/**
 * Log group for related messages
 */
export const logGroup = (title, callback) => {
  console.group(`%c[testboi4] ${title}`, LOG_STYLES.info);
  callback();
  console.groupEnd();
};

/**
 * Log table for structured data
 */
export const logTable = (data, columns) => {
  console.table(data, columns);
};

/**
 * Performance logging
 */
export const logPerformance = (label) => {
  const startTime = performance.now();

  return () => {
    const endTime = performance.now();
    const duration = (endTime - startTime).toFixed(2);
    log(`${label} took ${duration}ms`, 'debug');
  };
};
