/**
 * Local storage utility functions
 */

/**
 * Get an item from local storage
 * @param {string} key - The key to get
 * @param {*} defaultValue - The default value to return if the key doesn't exist
 * @returns {*} - The stored value or the default value
 */
export const getItem = (key, defaultValue = null) => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error getting item from localStorage: ${key}`, error);
    return defaultValue;
  }
};

/**
 * Set an item in local storage
 * @param {string} key - The key to set
 * @param {*} value - The value to store
 * @returns {boolean} - True if successful, false otherwise
 */
export const setItem = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error setting item in localStorage: ${key}`, error);
    return false;
  }
};

/**
 * Remove an item from local storage
 * @param {string} key - The key to remove
 * @returns {boolean} - True if successful, false otherwise
 */
export const removeItem = (key) => {
  try {
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing item from localStorage: ${key}`, error);
    return false;
  }
};

/**
 * Clear all items from local storage
 * @returns {boolean} - True if successful, false otherwise
 */
export const clearAll = () => {
  try {
    window.localStorage.clear();
    return true;
  } catch (error) {
    console.error('Error clearing localStorage', error);
    return false;
  }
};

/**
 * Get all keys in local storage
 * @returns {Array} - Array of keys
 */
export const getAllKeys = () => {
  try {
    return Object.keys(window.localStorage);
  } catch (error) {
    console.error('Error getting all keys from localStorage', error);
    return [];
  }
};

/**
 * Check if a key exists in local storage
 * @param {string} key - The key to check
 * @returns {boolean} - True if the key exists, false otherwise
 */
export const hasKey = (key) => {
  try {
    return window.localStorage.getItem(key) !== null;
  } catch (error) {
    console.error(`Error checking if key exists in localStorage: ${key}`, error);
    return false;
  }
};

export default {
  getItem,
  setItem,
  removeItem,
  clearAll,
  getAllKeys,
  hasKey
};
