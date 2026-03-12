/**
 * Form Handling Utilities
 * Functions for handling form submissions and validation
 */

/**
 * Handle form submission
 * @param {Event} event - Form submit event
 */
export function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // Validate form data
  if (!validateForm(data)) {
    showFormError('Please fill in all required fields correctly.');
    return;
  }

  // Show loading state
  setFormLoading(form, true);

  // Simulate form submission (replace with actual API call)
  setTimeout(() => {
    console.log('Form submitted:', data);
    showFormSuccess('Thank you for your message! We\'ll get back to you soon.');
    form.reset();
    setFormLoading(form, false);
  }, 1500);
}

/**
 * Validate form data
 * @param {Object} data - Form data object
 * @returns {boolean} - True if valid, false otherwise
 */
function validateForm(data) {
  const { name, email, message } = data;

  // Check required fields
  if (!name || !email || !message) {
    return false;
  }

  // Validate email format
  if (!isValidEmail(email)) {
    return false;
  }

  // Additional validations
  if (name.trim().length < 2) {
    return false;
  }

  if (message.trim().length < 10) {
    return false;
  }

  return true;
}

/**
 * Check if email is valid
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Set form loading state
 * @param {HTMLFormElement} form - Form element
 * @param {boolean} isLoading - Loading state
 */
function setFormLoading(form, isLoading) {
  const submitButton = form.querySelector('button[type="submit"]');

  if (isLoading) {
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
  } else {
    submitButton.disabled = false;
    submitButton.textContent = 'Send Message';
  }
}

/**
 * Show form error message
 * @param {string} message - Error message
 */
function showFormError(message) {
  showFormMessage(message, 'error');
}

/**
 * Show form success message
 * @param {string} message - Success message
 */
function showFormSuccess(message) {
  showFormMessage(message, 'success');
}

/**
 * Show form message
 * @param {string} message - Message text
 * @param {string} type - Message type ('error' or 'success')
 */
function showFormMessage(message, type) {
  // Remove existing messages
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create message element
  const messageEl = document.createElement('div');
  messageEl.className = `form-message form-message--${type}`;
  messageEl.textContent = message;
  messageEl.style.cssText = `
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    background-color: ${type === 'success' ? '#d1fae5' : '#fee2e2'};
    color: ${type === 'success' ? '#065f46' : '#991b1b'};
    border: 1px solid ${type === 'success' ? '#10b981' : '#ef4444'};
  `;

  // Insert message
  const form = document.getElementById('contact-form');
  form.insertBefore(messageEl, form.firstChild);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    messageEl.remove();
  }, 5000);
}
