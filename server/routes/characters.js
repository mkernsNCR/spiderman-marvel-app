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

// Debug environment variables
console.log('Marvel API Keys:', { 
  publicKey: PUBLIC_KEY ? PUBLIC_KEY.substring(0, 5) + '...' : 'undefined', 
  privateKey: PRIVATE_KEY ? PRIVATE_KEY.substring(0, 5) + '...' : 'undefined' 
});

// Function to generate authentication parameters with hash
const getAuthParams = () => {
  const timestamp = new Date().getTime();
  // Marvel API requires MD5 hash of ts+privateKey+publicKey (in that order)
  const hash = md5(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
  
  console.log('Generated Marvel auth params:', {
    timestamp,
    hashInput: `${timestamp}${PRIVATE_KEY ? PRIVATE_KEY.substring(0, 3) + '...' : 'undefined'}${PUBLIC_KEY ? PUBLIC_KEY.substring(0, 3) + '...' : 'undefined'}`,
    hashOutput: hash ? hash.substring(0, 10) + '...' : 'undefined'
  });
  
  return {
    ts: timestamp,
    apikey: PUBLIC_KEY,
    hash: hash
  };
};

/**
 * @route   GET /api/characters
 * @desc    Get Spider-Man related characters
 * @access  Public
 */
router.get('/', async (req, res, next) => {
  try {
    const params = {
      ...getAuthParams(),
      nameStartsWith: req.query.nameStartsWith || 'Spider',
      limit: req.query.limit || 20,
      offset: req.query.offset || 0,
      orderBy: req.query.orderBy || 'name',
    };

    console.log('Making Marvel API request with params:', {
      url: `${BASE_URL}/characters`,
      ts: params.ts,
      apikey: params.apikey ? params.apikey.substring(0, 5) + '...' : 'undefined',
      hash: params.hash ? params.hash.substring(0, 5) + '...' : 'undefined',
      nameStartsWith: params.nameStartsWith
    });

    const response = await axios.get(`${BASE_URL}/characters`, { params });
    
    res.status(200).json({
      status: 'success',
      data: response.data.data
    });
  } catch (error) {
    console.error('Marvel API Error:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      message: error.message,
      data: error.response?.data
    });
    next(error);
  }
});

/**
 * @route   GET /api/characters/:id
 * @desc    Get character by ID
 * @access  Public
 */
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const params = getAuthParams();

    const response = await axios.get(`${BASE_URL}/characters/${id}`, { params });
    
    if (response.data.data.results.length === 0) {
      return res.status(404).json({
        status: 'fail',
        message: `Character with ID ${id} not found`
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
 * @route   GET /api/characters/:id/comics
 * @desc    Get comics for a specific character
 * @access  Public
 */
router.get('/:id/comics', async (req, res, next) => {
  try {
    const { id } = req.params;
    const params = {
      ...getAuthParams(),
      orderBy: req.query.orderBy || '-onsaleDate',
      limit: req.query.limit || 10,
      offset: req.query.offset || 0,
    };

    const response = await axios.get(`${BASE_URL}/characters/${id}/comics`, { params });
    
    res.status(200).json({
      status: 'success',
      data: response.data.data
    });
  } catch (error) {
    next(error);
  }
});

export default router;
