/**
 * Unit tests for validation utility functions
 */
import { expect } from 'chai';
import { isEmpty, isValidEmail, isValidUrl, isAlphanumeric, isInRange, isValidSearchQuery } from '../../../src/utils/validation.js';

describe('Validation Utility Functions', () => {
  describe('isEmpty', () => {
    it('should return true for undefined values', () => {
      expect(isEmpty(undefined)).to.be.true;
    });

    it('should return true for null values', () => {
      expect(isEmpty(null)).to.be.true;
    });

    it('should return true for empty strings', () => {
      expect(isEmpty('')).to.be.true;
      expect(isEmpty('   ')).to.be.true;
    });

    it('should return true for empty arrays', () => {
      expect(isEmpty([])).to.be.true;
    });

    it('should return true for empty objects', () => {
      expect(isEmpty({})).to.be.true;
    });

    it('should return false for non-empty values', () => {
      expect(isEmpty('hello')).to.be.false;
      expect(isEmpty([1, 2, 3])).to.be.false;
      expect(isEmpty({ key: 'value' })).to.be.false;
      expect(isEmpty(0)).to.be.false;
      expect(isEmpty(false)).to.be.false;
    });
  });

  describe('isValidEmail', () => {
    it('should return true for valid email addresses', () => {
      expect(isValidEmail('test@example.com')).to.be.true;
      expect(isValidEmail('user.name@domain.co.uk')).to.be.true;
      expect(isValidEmail('user+tag@example.org')).to.be.true;
    });

    it('should return false for invalid email addresses', () => {
      expect(isValidEmail('test')).to.be.false;
      expect(isValidEmail('test@')).to.be.false;
      expect(isValidEmail('@example.com')).to.be.false;
      expect(isValidEmail('test@example')).to.be.false;
      expect(isValidEmail('test@.com')).to.be.false;
    });
  });

  describe('isValidUrl', () => {
    it('should return true for valid URLs', () => {
      expect(isValidUrl('https://example.com')).to.be.true;
      expect(isValidUrl('http://localhost:3000')).to.be.true;
      expect(isValidUrl('https://subdomain.example.co.uk/path?query=value')).to.be.true;
    });

    it('should return false for invalid URLs', () => {
      expect(isValidUrl('example.com')).to.be.false;
      expect(isValidUrl('http://')).to.be.false;
      expect(isValidUrl('https://')).to.be.false;
      expect(isValidUrl('invalid url')).to.be.false;
    });
  });

  describe('isAlphanumeric', () => {
    it('should return true for alphanumeric strings', () => {
      expect(isAlphanumeric('abc123')).to.be.true;
      expect(isAlphanumeric('ABC123')).to.be.true;
      expect(isAlphanumeric('123')).to.be.true;
      expect(isAlphanumeric('abc')).to.be.true;
    });

    it('should return false for non-alphanumeric strings', () => {
      expect(isAlphanumeric('abc-123')).to.be.false;
      expect(isAlphanumeric('abc 123')).to.be.false;
      expect(isAlphanumeric('abc_123')).to.be.false;
      expect(isAlphanumeric('abc@123')).to.be.false;
    });
  });

  describe('isInRange', () => {
    it('should return true for values within range', () => {
      expect(isInRange(5, 1, 10)).to.be.true;
      expect(isInRange(1, 1, 10)).to.be.true;
      expect(isInRange(10, 1, 10)).to.be.true;
    });

    it('should return false for values outside range', () => {
      expect(isInRange(0, 1, 10)).to.be.false;
      expect(isInRange(11, 1, 10)).to.be.false;
      expect(isInRange(-5, 1, 10)).to.be.false;
    });
  });

  describe('isValidSearchQuery', () => {
    it('should return true for valid search queries', () => {
      expect(isValidSearchQuery('spider man')).to.be.true;
      expect(isValidSearchQuery('Spider-Man')).to.be.true;
      expect(isValidSearchQuery('SpiderMan2099')).to.be.true;
    });

    it('should return false for invalid search queries', () => {
      expect(isValidSearchQuery('spider@man')).to.be.false;
      expect(isValidSearchQuery('spider_man')).to.be.false;
      expect(isValidSearchQuery('spider$man')).to.be.false;
    });
  });
});
