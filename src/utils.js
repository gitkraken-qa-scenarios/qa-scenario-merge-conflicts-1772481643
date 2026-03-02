/**
 * Shared utility functions for the auth service.
 */

/**
 * Formats a user's full name from first and last name parts.
 * Trims whitespace to handle user input from forms.
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string}
 */
function formatName(firstName, lastName) {
  const trimmed = `${firstName.trim()} ${lastName.trim()}`;
  return trimmed;
}

/**
 * Returns a formatted date string (YYYY-MM-DD).
 * @param {Date} date
 * @returns {string}
 */
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

/**
 * Checks whether a given string is a non-empty value.
 * @param {*} value
 * @returns {boolean}
 */
function isPresent(value) {
  return value !== null && value !== undefined && value !== '';
}

/**
 * Strips potentially dangerous characters from user-supplied input.
 * Removes HTML tags and trims surrounding whitespace.
 * @param {string} input
 * @returns {string}
 */
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input.replace(/<[^>]*>/g, '').trim();
}

module.exports = { formatName, formatDate, isPresent, sanitizeInput };
