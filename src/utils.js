/**
 * Shared utility functions for the auth service.
 */

/**
 * Formats a user's full name from first and last name parts.
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string}
 */
function formatName(firstName, lastName) {
  return `${firstName} ${lastName}`;
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

module.exports = { formatName, formatDate, isPresent };
