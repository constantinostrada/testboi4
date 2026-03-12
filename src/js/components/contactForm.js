/**
 * Contact Form Component
 * Handles form validation and submission
 */

import { log } from '../utils/logger.js';
import { validateEmail } from '../utils/validation.js';

/**
 * Initialize contact form
 */
export const initContactForm = () => {
  const form = document.getElementById('contact-form');

  if (!form) {
    log('Contact form not found', 'warn');
    return;
  }

  form.addEventListener('submit', handleFormSubmit);

  // Add real-time validation
  const emailInput = form.querySelector('#email');
  if (emailInput) {
    emailInput.addEventListener('blur', (e) => {
      validateEmailField(e.target);
    });
  }

  log('Contact form initialized');
};

/**
 * Handle form submission
 */
const handleFormSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // Validate form
  if (!validateForm(data)) {
    log('Form validation failed', 'error');
    return;
  }

  // Log form data (in production, this would be sent to a server)
  log('Form submitted successfully', 'success');
  log('Form data:', 'info');
  console.table(data);

  // Show success message
  showSuccessMessage(form);

  // Reset form
  form.reset();
};

/**
 * Validate form data
 */
const validateForm = (data) => {
  const errors = [];

  // Validate name
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  // Validate email
  if (!data.email || !validateEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }

  // Validate message
  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  // Show errors if any
  if (errors.length > 0) {
    showErrors(errors);
    return false;
  }

  return true;
};

/**
 * Validate email field
 */
const validateEmailField = (input) => {
  const email = input.value.trim();

  if (email && !validateEmail(email)) {
    input.setCustomValidity('Please enter a valid email address');
    input.reportValidity();
  } else {
    input.setCustomValidity('');
  }
};

/**
 * Show validation errors
 */
const showErrors = (errors) => {
  const errorMessage = errors.join('\n');
  alert(errorMessage); // In production, use a better UI for errors
};

/**
 * Show success message
 */
const showSuccessMessage = (form) => {
  // Create success message element
  const existingMessage = form.querySelector('.success-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  const message = document.createElement('div');
  message.className = 'success-message';
  message.style.cssText = `
    margin-top: 1rem;
    padding: 1rem;
    background-color: #10b981;
    color: white;
    border-radius: 0.5rem;
    text-align: center;
  `;
  message.textContent = 'Thank you! Your message has been sent successfully.';

  form.appendChild(message);

  // Remove message after 5 seconds
  setTimeout(() => {
    message.remove();
  }, 5000);
};
