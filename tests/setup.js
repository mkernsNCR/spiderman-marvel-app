/**
 * Test setup configuration
 */

// Set environment variables for testing
process.env.NODE_ENV = 'test';
process.env.PORT = 5001; // Use a different port for testing

// Import required libraries
import { expect } from 'chai';
import sinon from 'sinon';
import { JSDOM } from 'jsdom';

// Set up JSDOM for browser environment simulation
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://localhost',
  pretendToBeVisual: true,
  runScripts: 'dangerously'
});

// Set up global variables for browser environment
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.localStorage = {
  getItem: sinon.stub(),
  setItem: sinon.stub(),
  removeItem: sinon.stub(),
  clear: sinon.stub()
};

// Add fetch and XMLHttpRequest to global
global.fetch = sinon.stub();
global.XMLHttpRequest = sinon.stub();

// Make chai and sinon available globally
global.expect = expect;
global.sinon = sinon;

// Clean up function to run after tests
afterEach(() => {
  // Reset stubs
  sinon.restore();
});

// Mock for localStorage
const localStorageMock = (() => {
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
})();

// Replace the global localStorage with our mock
Object.defineProperty(global, 'localStorage', {
  value: localStorageMock
});
