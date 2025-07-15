import axios from 'axios';
import { API, ERROR_MESSAGES } from './constants';

/**
 * Create an axios instance for API calls
 */
const apiClient = axios.create({
  baseURL: API.BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

/**
 * Handle API errors
 * @param {Error} error - The error object
 * @returns {Object} - The error response
 */
const handleApiError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return {
      success: false,
      status: error.response.status,
      message: error.response.data.message || ERROR_MESSAGES.API,
      data: null
    };
  } else if (error.request) {
    // The request was made but no response was received
    return {
      success: false,
      status: 0,
      message: ERROR_MESSAGES.NETWORK,
      data: null
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    return {
      success: false,
      status: 0,
      message: error.message || ERROR_MESSAGES.GENERAL,
      data: null
    };
  }
};

/**
 * Make a GET request
 * @param {string} url - The URL to make the request to
 * @param {Object} params - The query parameters
 * @returns {Promise} - The response data
 */
export const get = async (url, params = {}) => {
  try {
    const response = await apiClient.get(url, { params });
    return {
      success: true,
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return handleApiError(error);
  }
};

/**
 * Make a POST request
 * @param {string} url - The URL to make the request to
 * @param {Object} data - The data to send
 * @returns {Promise} - The response data
 */
export const post = async (url, data = {}) => {
  try {
    const response = await apiClient.post(url, data);
    return {
      success: true,
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return handleApiError(error);
  }
};

/**
 * Make a PUT request
 * @param {string} url - The URL to make the request to
 * @param {Object} data - The data to send
 * @returns {Promise} - The response data
 */
export const put = async (url, data = {}) => {
  try {
    const response = await apiClient.put(url, data);
    return {
      success: true,
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return handleApiError(error);
  }
};

/**
 * Make a DELETE request
 * @param {string} url - The URL to make the request to
 * @returns {Promise} - The response data
 */
export const del = async (url) => {
  try {
    const response = await apiClient.delete(url);
    return {
      success: true,
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return handleApiError(error);
  }
};

export default {
  get,
  post,
  put,
  delete: del
};
