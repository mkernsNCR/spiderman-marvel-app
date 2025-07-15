import express from 'express';
import characters from '../mock-data/characters.js';
import comics from '../mock-data/comics.js';

const router = express.Router();

/**
 * @route   GET /api/mock/characters
 * @desc    Get all Spider-Man related characters
 * @access  Public
 */
router.get('/characters', (req, res) => {
  try {
    const { nameStartsWith, limit = 20, offset = 0 } = req.query;
    
    let results = [...characters];
    
    // Filter by name if nameStartsWith parameter is provided
    if (nameStartsWith) {
      results = results.filter(character => 
        character.name.toLowerCase().includes(nameStartsWith.toLowerCase())
      );
    }
    
    // Apply pagination
    const paginatedResults = results.slice(offset, offset + parseInt(limit));
    
    // Format response to match Marvel API structure
    const response = {
      code: 200,
      status: "Ok",
      copyright: "© 2025 MARVEL",
      attributionText: "Data provided by Marvel. © 2025 MARVEL",
      attributionHTML: "<a href=\"http://marvel.com\">Data provided by Marvel. © 2025 MARVEL</a>",
      etag: "mock-etag-" + new Date().getTime(),
      data: {
        offset: parseInt(offset),
        limit: parseInt(limit),
        total: results.length,
        count: paginatedResults.length,
        results: paginatedResults
      }
    };
    
    res.json(response);
  } catch (error) {
    console.error('Error in mock characters API:', error);
    res.status(500).json({ 
      success: false, 
      error: { message: 'Server error', code: 'SERVER_ERROR', status: 500 } 
    });
  }
});

/**
 * @route   GET /api/mock/characters/:id
 * @desc    Get character by ID
 * @access  Public
 */
router.get('/characters/:id', (req, res) => {
  try {
    const { id } = req.params;
    const character = characters.find(char => char.id === parseInt(id));
    
    if (!character) {
      return res.status(404).json({ 
        code: 404,
        status: "Not Found",
        message: "Character not found" 
      });
    }
    
    // Format response to match Marvel API structure
    const response = {
      code: 200,
      status: "Ok",
      copyright: "© 2025 MARVEL",
      attributionText: "Data provided by Marvel. © 2025 MARVEL",
      attributionHTML: "<a href=\"http://marvel.com\">Data provided by Marvel. © 2025 MARVEL</a>",
      etag: "mock-etag-" + new Date().getTime(),
      data: {
        offset: 0,
        limit: 1,
        total: 1,
        count: 1,
        results: [character]
      }
    };
    
    res.json(response);
  } catch (error) {
    console.error('Error in mock character by ID API:', error);
    res.status(500).json({ 
      success: false, 
      error: { message: 'Server error', code: 'SERVER_ERROR', status: 500 } 
    });
  }
});

/**
 * @route   GET /api/mock/comics
 * @desc    Get all Spider-Man related comics
 * @access  Public
 */
router.get('/comics', (req, res) => {
  try {
    const { titleStartsWith, limit = 20, offset = 0 } = req.query;
    
    let results = [...comics];
    
    // Filter by title if titleStartsWith parameter is provided
    if (titleStartsWith) {
      results = results.filter(comic => 
        comic.title.toLowerCase().includes(titleStartsWith.toLowerCase())
      );
    }
    
    // Apply pagination
    const paginatedResults = results.slice(offset, offset + parseInt(limit));
    
    // Format response to match Marvel API structure
    const response = {
      code: 200,
      status: "Ok",
      copyright: "© 2025 MARVEL",
      attributionText: "Data provided by Marvel. © 2025 MARVEL",
      attributionHTML: "<a href=\"http://marvel.com\">Data provided by Marvel. © 2025 MARVEL</a>",
      etag: "mock-etag-" + new Date().getTime(),
      data: {
        offset: parseInt(offset),
        limit: parseInt(limit),
        total: results.length,
        count: paginatedResults.length,
        results: paginatedResults
      }
    };
    
    res.json(response);
  } catch (error) {
    console.error('Error in mock comics API:', error);
    res.status(500).json({ 
      success: false, 
      error: { message: 'Server error', code: 'SERVER_ERROR', status: 500 } 
    });
  }
});

/**
 * @route   GET /api/mock/comics/:id
 * @desc    Get comic by ID
 * @access  Public
 */
router.get('/comics/:id', (req, res) => {
  try {
    const { id } = req.params;
    const comic = comics.find(c => c.id === parseInt(id));
    
    if (!comic) {
      return res.status(404).json({ 
        code: 404,
        status: "Not Found",
        message: "Comic not found" 
      });
    }
    
    // Format response to match Marvel API structure
    const response = {
      code: 200,
      status: "Ok",
      copyright: "© 2025 MARVEL",
      attributionText: "Data provided by Marvel. © 2025 MARVEL",
      attributionHTML: "<a href=\"http://marvel.com\">Data provided by Marvel. © 2025 MARVEL</a>",
      etag: "mock-etag-" + new Date().getTime(),
      data: {
        offset: 0,
        limit: 1,
        total: 1,
        count: 1,
        results: [comic]
      }
    };
    
    res.json(response);
  } catch (error) {
    console.error('Error in mock comic by ID API:', error);
    res.status(500).json({ 
      success: false, 
      error: { message: 'Server error', code: 'SERVER_ERROR', status: 500 } 
    });
  }
});

/**
 * @route   GET /api/mock/comics/search
 * @desc    Search comics by title
 * @access  Public
 */
router.get('/comics/search', (req, res) => {
  try {
    const { titleStartsWith, limit = 20, offset = 0 } = req.query;
    
    let results = [...comics];
    
    // Filter by title if titleStartsWith parameter is provided
    if (titleStartsWith) {
      results = results.filter(comic => 
        comic.title.toLowerCase().includes(titleStartsWith.toLowerCase())
      );
    }
    
    // Apply pagination
    const paginatedResults = results.slice(offset, offset + parseInt(limit));
    
    // Format response to match Marvel API structure
    const response = {
      code: 200,
      status: "Ok",
      copyright: "© 2025 MARVEL",
      attributionText: "Data provided by Marvel. © 2025 MARVEL",
      attributionHTML: "<a href=\"http://marvel.com\">Data provided by Marvel. © 2025 MARVEL</a>",
      etag: "mock-etag-" + new Date().getTime(),
      data: {
        offset: parseInt(offset),
        limit: parseInt(limit),
        total: results.length,
        count: paginatedResults.length,
        results: paginatedResults
      }
    };
    
    res.json(response);
  } catch (error) {
    console.error('Error in mock comics search API:', error);
    res.status(500).json({ 
      success: false, 
      error: { message: 'Server error', code: 'SERVER_ERROR', status: 500 } 
    });
  }
});

export default router;
