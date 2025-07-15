/**
 * Application constants
 */

// API endpoints
export const API = {
  BASE_URL: '/api',
  CHARACTERS: '/api/characters',
  COMICS: '/api/comics',
  HEALTH: '/api/health',
  TEST: '/api/test'
};

// Marvel API
export const MARVEL = {
  BASE_URL: 'https://gateway.marvel.com/v1/public',
  IMAGE_NOT_AVAILABLE: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
};

// Local storage keys
export const STORAGE_KEYS = {
  DARK_MODE: 'spiderman-app-dark-mode',
  FAVORITES: 'spiderman-app-favorites',
  RECENT_SEARCHES: 'spiderman-app-recent-searches'
};

// Pagination
export const PAGINATION = {
  DEFAULT_LIMIT: 20,
  DEFAULT_OFFSET: 0
};

// Character types
export const CHARACTER_TYPES = {
  HERO: 'hero',
  VILLAIN: 'villain',
  ANTI_HERO: 'anti-hero',
  SUPPORTING: 'supporting'
};

// Comic formats
export const COMIC_FORMATS = {
  COMIC: 'comic',
  MAGAZINE: 'magazine',
  TRADE_PAPERBACK: 'trade paperback',
  HARDCOVER: 'hardcover',
  DIGEST: 'digest',
  GRAPHIC_NOVEL: 'graphic novel',
  DIGITAL_COMIC: 'digital comic',
  INFINITE_COMIC: 'infinite comic'
};

// Error messages
export const ERROR_MESSAGES = {
  GENERAL: 'Something went wrong. Please try again later.',
  NOT_FOUND: 'The requested resource was not found.',
  NETWORK: 'Network error. Please check your connection.',
  API: 'Error communicating with the Marvel API.'
};

// Routes
export const ROUTES = {
  HOME: '/',
  CHARACTER_DETAIL: '/character/:id',
  COMICS: '/comics',
  ABILITIES: '/abilities',
  TIMELINE: '/timeline',
  NOT_FOUND: '*'
};
