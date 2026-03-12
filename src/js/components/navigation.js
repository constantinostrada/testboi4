/**
 * Navigation Component
 * Handles mobile menu toggle and navigation interactions
 */

import { log } from '../utils/logger.js';

/**
 * Initialize navigation component
 */
export const initNavigation = () => {
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');
  const navLinks = document.querySelectorAll('.nav__link');

  if (!navToggle || !navMenu) {
    log('Navigation elements not found', 'warn');
    return;
  }

  // Toggle mobile menu
  navToggle.addEventListener('click', () => {
    toggleMobileMenu(navToggle, navMenu);
  });

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        closeMobileMenu(navToggle, navMenu);
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (
      !navToggle.contains(e.target) &&
      !navMenu.contains(e.target) &&
      navMenu.classList.contains('active')
    ) {
      closeMobileMenu(navToggle, navMenu);
    }
  });

  // Handle scroll to highlight active section
  window.addEventListener('scroll', () => {
    highlightActiveSection(navLinks);
  });

  log('Navigation initialized');
};

/**
 * Toggle mobile menu open/close
 */
const toggleMobileMenu = (toggle, menu) => {
  toggle.classList.toggle('active');
  menu.classList.toggle('active');

  // Update aria attributes for accessibility
  const isExpanded = toggle.classList.contains('active');
  toggle.setAttribute('aria-expanded', isExpanded);
};

/**
 * Close mobile menu
 */
const closeMobileMenu = (toggle, menu) => {
  toggle.classList.remove('active');
  menu.classList.remove('active');
  toggle.setAttribute('aria-expanded', 'false');
};

/**
 * Highlight active navigation link based on scroll position
 */
const highlightActiveSection = (navLinks) => {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
};
