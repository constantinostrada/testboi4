/**
 * Validation Utility Functions
 */

/**
 * Validate email address
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (basic format)
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^[\d\s\-+()]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

/**
 * Validate URL
 */
export const validateURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};

/**
 * Validate password strength
 * Returns object with isValid and strength level
 */
export const validatePassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const strength = [
    password.length >= minLength,
    hasUpperCase,
    hasLowerCase,
    hasNumbers,
    hasSpecialChar,
  ].filter(Boolean).length;

  return {
    isValid: strength >= 3 && password.length >= minLength,
    strength: strength === 5 ? 'strong' : strength >= 3 ? 'medium' : 'weak',
    requirements: {
      minLength: password.length >= minLength,
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      hasSpecialChar,
    },
  };
};

/**
 * Validate credit card number (basic Luhn algorithm)
 */
export const validateCreditCard = (cardNumber) => {
  const digits = cardNumber.replace(/\D/g, '');

  if (digits.length < 13 || digits.length > 19) {
    return false;
  }

  let sum = 0;
  let isEven = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i], 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

/**
 * Validate required field
 */
export const validateRequired = (value) => {
  return value !== null && value !== undefined && value.toString().trim() !== '';
};

/**
 * Validate minimum length
 */
export const validateMinLength = (value, minLength) => {
  return value && value.toString().length >= minLength;
};

/**
 * Validate maximum length
 */
export const validateMaxLength = (value, maxLength) => {
  return value && value.toString().length <= maxLength;
};

/**
 * Validate numeric value
 */
export const validateNumeric = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

/**
 * Validate value within range
 */
export const validateRange = (value, min, max) => {
  const num = parseFloat(value);
  return !isNaN(num) && num >= min && num <= max;
};
