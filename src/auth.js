const { isPresent } = require('./utils');

const SESSION_EXPIRY_MS = 30 * 60 * 1000; // 30 minutes

/**
 * Creates a new session token for a given user ID.
 * @param {string} userId
 * @returns {{ token: string, expiresAt: Date }}
 */
function createSession(userId) {
  if (!isPresent(userId)) {
    throw new Error('userId is required to create a session');
  }

  const token = `sess_${userId}_${Date.now()}`;
  const expiresAt = new Date(Date.now() + SESSION_EXPIRY_MS);

  return { token, expiresAt };
}

/**
 * Checks whether a session is still valid.
 * @param {{ expiresAt: Date }} session
 * @returns {boolean}
 */
function isSessionValid(session) {
  return session && new Date() < new Date(session.expiresAt);
}

module.exports = { createSession, isSessionValid };
