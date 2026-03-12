/**
 * Logger utility for consistent logging
 * @module utils/logger
 */

/**
 * Logger class for application logging
 */
class Logger {
  constructor() {
    this.prefix = '[testboi4]';
    this.isDevelopment = window.location.hostname === 'localhost' || 
                         window.location.hostname === '127.0.0.1';
  }

  /**
   * Log informational message
   * @param {...any} args - Arguments to log
   */
  log(...args) {
    if (this.isDevelopment) {
      console.log(this.prefix, ...args);
    }
  }

  /**
   * Log informational message (alias for log)
   * @param {...any} args - Arguments to log
   */
  info(...args) {
    if (this.isDevelopment) {
      console.info(this.prefix, ...args);
    }
  }

  /**
   * Log warning message
   * @param {...any} args - Arguments to log
   */
  warn(...args) {
    console.warn(this.prefix, ...args);
  }

  /**
   * Log error message
   * @param {...any} args - Arguments to log
   */
  error(...args) {
    console.error(this.prefix, ...args);
  }

  /**
   * Log debug message
   * @param {...any} args - Arguments to log
   */
  debug(...args) {
    if (this.isDevelopment) {
      console.debug(this.prefix, ...args);
    }
  }

  /**
   * Group log messages
   * @param {string} label - Group label
   */
  group(label) {
    if (this.isDevelopment) {
      console.group(`${this.prefix} ${label}`);
    }
  }

  /**
   * End group
   */
  groupEnd() {
    if (this.isDevelopment) {
      console.groupEnd();
    }
  }

  /**
   * Log table data
   * @param {*} data - Data to display in table format
   */
  table(data) {
    if (this.isDevelopment) {
      console.table(data);
    }
  }
}

// Export singleton instance
export const logger = new Logger();
