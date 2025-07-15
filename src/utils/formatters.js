/**
 * Utility functions for data formatting
 */

/**
 * Format a date string to a human-readable format
 * @param {string} dateString - The date string to format
 * @param {object} options - Formatting options for Intl.DateTimeFormat
 * @returns {string} - The formatted date string
 */
export const formatDate = (dateString, options = {}) => {
  if (!dateString) return 'N/A';
  
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  };
  
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', defaultOptions).format(date);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid Date';
  }
};

/**
 * Format a price number to a currency string
 * @param {number} price - The price to format
 * @param {string} currency - The currency code (default: 'USD')
 * @returns {string} - The formatted price string
 */
export const formatPrice = (price, currency = 'USD') => {
  if (price === undefined || price === null) return 'N/A';
  
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(price);
  } catch (error) {
    console.error('Error formatting price:', error);
    return `${price}`;
  }
};

/**
 * Truncate a string to a specified length and add ellipsis if needed
 * @param {string} str - The string to truncate
 * @param {number} maxLength - The maximum length of the string
 * @returns {string} - The truncated string
 */
export const truncateString = (str, maxLength = 100) => {
  if (!str) return '';
  if (str.length <= maxLength) return str;
  
  return `${str.substring(0, maxLength)}...`;
};

/**
 * Format a number with commas for thousands
 * @param {number} num - The number to format
 * @returns {string} - The formatted number string
 */
export const formatNumber = (num) => {
  if (num === undefined || num === null) return 'N/A';
  
  try {
    return new Intl.NumberFormat('en-US').format(num);
  } catch (error) {
    console.error('Error formatting number:', error);
    return `${num}`;
  }
};

/**
 * Convert an array to a comma-separated string
 * @param {Array} arr - The array to convert
 * @param {string} separator - The separator to use (default: ', ')
 * @returns {string} - The comma-separated string
 */
export const arrayToString = (arr, separator = ', ') => {
  if (!arr || !Array.isArray(arr)) return '';
  if (arr.length === 0) return '';
  
  return arr.join(separator);
};
