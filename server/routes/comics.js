import express from 'express';
import axios from 'axios';
import md5 from 'md5';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const router = express.Router();

// Marvel API base URL
const BASE_URL = 'https://gateway.marvel.com/v1/public';

// API keys from environment variables
const PUBLIC_KEY = process.env.VITE_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = process.env.MARVEL_PRIVATE_KEY;

// Function to generate authentication parameters with hash
const getAuthParams = () => {
  const timestamp = new Date().getTime();
  const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);
  
  return {
    ts: timestamp,
    apikey: PUBLIC_KEY,
    hash: hash
  };
};

/**
 * @route   GET /api/comics
 * @desc    Get Spider-Man comics
 * @access  Public
 */
router.get('/', async (req, res, next) => {
  try {
    const params = {
      ...getAuthParams(),
      titleStartsWith: req.query.titleStartsWith || 'Spider-Man',
      orderBy: req.query.orderBy || '-onsaleDate',
      limit: req.query.limit || 20,
      offset: req.query.offset || 0,
    };

    // If specific format is provided
    if (req.query.format) {
      params.format = req.query.format;
    }

    const response = await axios.get(`${BASE_URL}/comics`, { params });
    
    res.status(200).json({
      status: 'success',
      data: response.data.data
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @route   GET /api/comics/:id
 * @desc    Get comic by ID
 * @access  Public
 */
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const params = getAuthParams();

    const response = await axios.get(`${BASE_URL}/comics/${id}`, { params });
    
    if (response.data.data.results.length === 0) {
      return res.status(404).json({
        status: 'fail',
        message: `Comic with ID ${id} not found`
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: response.data.data.results[0]
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @route   GET /api/comics/character/:characterId
 * @desc    Get comics by character ID
 * @access  Public
 */
router.get('/character/:characterId', async (req, res, next) => {
  try {
    const { characterId } = req.params;
    const params = {
      ...getAuthParams(),
      characters: characterId,
      orderBy: req.query.orderBy || '-onsaleDate',
      limit: req.query.limit || 20,
      offset: req.query.offset || 0,
    };

    const response = await axios.get(`${BASE_URL}/comics`, { params });
    
    res.status(200).json({
      status: 'success',
      data: response.data.data
    });
  } catch (error) {
    next(error);
  }
});

export default router;
