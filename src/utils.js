/**
 * Shared utility functions for the auth service.
 */

const LOG_LEVELS = Object.freeze({ DEBUG: 'debug', INFO: 'info', WARN: 'warn', ERROR: 'error' });

/**
 * Formats a user's full name from first and last name parts.
 * Falls back to 'Anonymous' if both parts are missing.
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string}
 */
function formatName(firstName, lastName) {
  if (!firstName && !lastName) return 'Anonymous';
  return [firstName, lastName].filter(Boolean).join(' ');
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
 * Emits a structured log line to stdout with a timestamp and level tag.
 * @param {string} level - One of LOG_LEVELS
 * @param {string} message
 * @param {object} [meta={}]
 */
function log(level, message, meta = {}) {
  const entry = {
    ts: new Date().toISOString(),
    level: LOG_LEVELS[level.toUpperCase()] ?? LOG_LEVELS.INFO,
    message,
    ...meta,
  };
  process.stdout.write(JSON.stringify(entry) + '\n');
}

module.exports = { formatName, formatDate, isPresent, log, LOG_LEVELS };
