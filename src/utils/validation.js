/**
 * Utility functions for input validation
 */

/**
 * Check if a value is empty (null, undefined, empty string, or empty array)
 * @param {*} value - The value to check
 * @returns {boolean} - True if the value is empty, false otherwise
 */
export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'string' && value.trim() === '') ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0)
  );
};

/**
 * Validate email format
 * @param {string} email - The email to validate
 * @returns {boolean} - True if the email is valid, false otherwise
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate URL format
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if the URL is valid, false otherwise
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Check if a string contains only alphanumeric characters
 * @param {string} str - The string to check
 * @returns {boolean} - True if the string is alphanumeric, false otherwise
 */
export const isAlphanumeric = (str) => {
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  return alphanumericRegex.test(str);
};

/**
 * Validate that a value is within a specified range
 * @param {number} value - The value to check
 * @param {number} min - The minimum allowed value
 * @param {number} max - The maximum allowed value
 * @returns {boolean} - True if the value is within range, false otherwise
 */
export const isInRange = (value, min, max) => {
  return value >= min && value <= max;
};

/**
 * Validate search query (no special characters except spaces and hyphens)
 * @param {string} query - The search query to validate
 * @returns {boolean} - True if the query is valid, false otherwise
 */
export const isValidSearchQuery = (query) => {
  const searchQueryRegex = /^[a-zA-Z0-9\s-]+$/;
  return searchQueryRegex.test(query);
};
