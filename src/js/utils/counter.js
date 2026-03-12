/**
 * Counter utility class
 */
export class Counter {
  /**
   * Create a new Counter
   * @param {number} initialValue - Initial counter value
   */
  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  /**
   * Increment the counter
   * @param {number} step - Amount to increment by
   * @returns {number} New value
   */
  increment(step = 1) {
    this.value += step;
    return this.value;
  }

  /**
   * Decrement the counter
   * @param {number} step - Amount to decrement by
   * @returns {number} New value
   */
  decrement(step = 1) {
    this.value -= step;
    return this.value;
  }

  /**
   * Reset the counter
   * @param {number} value - Value to reset to (default: 0)
   * @returns {number} New value
   */
  reset(value = 0) {
    this.value = value;
    return this.value;
  }

  /**
   * Get current counter value
   * @returns {number} Current value
   */
  getValue() {
    return this.value;
  }

  /**
   * Set counter value
   * @param {number} value - New value
   * @returns {number} New value
   */
  setValue(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Value must be a number');
    }
    this.value = value;
    return this.value;
  }
}
