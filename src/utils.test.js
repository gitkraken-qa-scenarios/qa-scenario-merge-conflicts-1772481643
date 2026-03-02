const { describe, it } = require('node:test');
const assert = require('node:assert');
const { formatName, sanitizeInput, isPresent } = require('./utils');

describe('formatName', () => {
  it('trims whitespace from first and last name', () => {
    assert.strictEqual(formatName('  Alex ', ' Johnson '), 'Alex Johnson');
  });

  it('concatenates first and last name with a space', () => {
    assert.strictEqual(formatName('Jane', 'Doe'), 'Jane Doe');
  });
});

describe('sanitizeInput', () => {
  it('strips HTML tags from input', () => {
    assert.strictEqual(sanitizeInput('<script>alert("xss")</script>Hello'), 'Hello');
  });

  it('trims surrounding whitespace', () => {
    assert.strictEqual(sanitizeInput('  hello world  '), 'hello world');
  });

  it('returns empty string for non-string input', () => {
    assert.strictEqual(sanitizeInput(null), '');
    assert.strictEqual(sanitizeInput(42), '');
  });
});

describe('isPresent', () => {
  it('returns false for null, undefined, and empty string', () => {
    assert.strictEqual(isPresent(null), false);
    assert.strictEqual(isPresent(undefined), false);
    assert.strictEqual(isPresent(''), false);
  });

  it('returns true for non-empty values', () => {
    assert.strictEqual(isPresent('hello'), true);
    assert.strictEqual(isPresent(0), true);
  });
});
