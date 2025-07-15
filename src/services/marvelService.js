import axios from 'axios';

// Create axios instance for our backend API
const api = axios.create({
  baseURL: '/api/mock', // Updated to use mock API endpoints
});

// Get Spider-Man related characters
export const getSpidermanCharacters = async () => {
  try {
    // Using mock API - no need for params as the mock data is pre-filtered
    const response = await api.get('/characters');
    return response.data.data.results;
  } catch (error) {
    console.error('Error fetching Spider-Man characters:', error);
    throw error;
  }
};

// Get character by ID
export const getCharacterById = async (characterId) => {
  try {
    // For mock API, we'll get all characters and filter by ID
    const response = await api.get('/characters');
    const character = response.data.data.results.find(char => char.id === parseInt(characterId));
    return character || null;
  } catch (error) {
    console.error(`Error fetching character with ID ${characterId}:`, error);
    throw error;
  }
};

// Get comics for a specific character
export const getCharacterComics = async (characterId) => {
  try {
    // For mock API, we'll get all comics and filter by character ID
    const response = await api.get('/comics');
    const characterComics = response.data.data.results.filter(comic => 
      comic.characters && 
      comic.characters.items && 
      comic.characters.items.some(char => char.resourceURI.includes(`/${characterId}`)));
    return characterComics;
  } catch (error) {
    console.error(`Error fetching comics for character with ID ${characterId}:`, error);
    throw error;
  }
};

// Get Spider-Man comics
export const getSpidermanComics = async (offset = 0, limit = 20) => {
  try {
    // Using mock API - all comics are Spider-Man related
    const response = await api.get('/comics');
    // Apply pagination client-side
    const startIndex = offset;
    const endIndex = offset + limit;
    const paginatedResults = response.data.data.results.slice(startIndex, endIndex);
    return paginatedResults;
  } catch (error) {
    console.error('Error fetching Spider-Man comics:', error);
    throw error;
  }
};

// Search comics by title
export const searchComics = async (title, offset = 0, limit = 20) => {
  try {
    // Using mock API - filter comics by title client-side
    const response = await api.get('/comics');
    const filteredResults = response.data.data.results.filter(comic => 
      comic.title.toLowerCase().includes(title.toLowerCase()));
    // Apply pagination client-side
    const startIndex = offset;
    const endIndex = offset + limit;
    const paginatedResults = filteredResults.slice(startIndex, endIndex);
    return paginatedResults;
  } catch (error) {
    console.error(`Error searching comics with title ${title}:`, error);
    throw error;
  }
};

export default {
  getSpidermanCharacters,
  getCharacterById,
  getCharacterComics,
  getSpidermanComics,
  searchComics,
};
