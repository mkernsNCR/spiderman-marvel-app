/**
 * Test utility functions
 */
import sinon from 'sinon';
import { JSDOM } from 'jsdom';

/**
 * Create a mock response object for testing API endpoints
 * @returns {Object} - Mock response object with status, json, and send methods
 */
export const createMockResponse = () => {
  const res = {};
  res.status = sinon.stub().returns(res);
  res.json = sinon.stub().returns(res);
  res.send = sinon.stub().returns(res);
  res.setHeader = sinon.stub().returns(res);
  res.end = sinon.stub().returns(res);
  return res;
};

/**
 * Create a mock request object for testing API endpoints
 * @param {Object} options - Request options
 * @returns {Object} - Mock request object
 */
export const createMockRequest = (options = {}) => {
  return {
    body: options.body || {},
    params: options.params || {},
    query: options.query || {},
    headers: options.headers || {},
    cookies: options.cookies || {},
    ...options
  };
};

/**
 * Create a mock DOM environment for testing React components
 * @returns {Object} - JSDOM instance
 */
export const createMockDOM = () => {
  return new JSDOM('<!DOCTYPE html><html><body></body></html>', {
    url: 'http://localhost',
    pretendToBeVisual: true,
    runScripts: 'dangerously'
  });
};

/**
 * Create a mock localStorage for testing
 * @returns {Object} - Mock localStorage object
 */
export const createMockLocalStorage = () => {
  let store = {};
  
  return {
    getItem: (key) => {
      return store[key] || null;
    },
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
    getAll: () => {
      return store;
    }
  };
};

/**
 * Wait for a specified time (useful for async tests)
 * @param {number} ms - Time to wait in milliseconds
 * @returns {Promise} - Promise that resolves after the specified time
 */
export const wait = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Create a mock axios instance for testing API calls
 * @param {Object} responses - Mock responses for different endpoints
 * @returns {Object} - Mock axios instance
 */
export const createMockAxios = (responses = {}) => {
  const mockAxios = {};
  
  // Mock GET requests
  mockAxios.get = sinon.stub().callsFake((url) => {
    const matchingUrl = Object.keys(responses).find(key => url.includes(key));
    
    if (matchingUrl) {
      return Promise.resolve({ data: responses[matchingUrl] });
    }
    
    return Promise.reject(new Error(`No mock response for ${url}`));
  });
  
  // Mock POST requests
  mockAxios.post = sinon.stub().callsFake((url) => {
    const matchingUrl = Object.keys(responses).find(key => url.includes(key));
    
    if (matchingUrl) {
      return Promise.resolve({ data: responses[matchingUrl] });
    }
    
    return Promise.reject(new Error(`No mock response for ${url}`));
  });
  
  // Add other methods as needed
  mockAxios.put = sinon.stub();
  mockAxios.delete = sinon.stub();
  mockAxios.create = sinon.stub().returns(mockAxios);
  
  return mockAxios;
};

export default {
  createMockResponse,
  createMockRequest,
  createMockDOM,
  createMockLocalStorage,
  wait,
  createMockAxios
};
