import axios from 'axios';
import md5 from 'md5';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// API keys from environment variables
const PUBLIC_KEY = process.env.VITE_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = process.env.MARVEL_PRIVATE_KEY;

// Marvel API base URL
const BASE_URL = 'https://gateway.marvel.com/v1/public';

console.log('Environment variables:');
console.log('PUBLIC_KEY:', PUBLIC_KEY ? `${PUBLIC_KEY.substring(0, 5)}...` : 'undefined');
console.log('PRIVATE_KEY:', PRIVATE_KEY ? `${PRIVATE_KEY.substring(0, 5)}...` : 'undefined');

// Function to generate authentication parameters with hash
const getAuthParams = () => {
  const timestamp = new Date().getTime();
  // Marvel API requires MD5 hash of ts+privateKey+publicKey (in that order)
  const hash = md5(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
  
  console.log('Generated Marvel auth params:');
  console.log('timestamp:', timestamp);
  console.log('hash:', hash);
  
  return {
    ts: timestamp,
    apikey: PUBLIC_KEY,
    hash: hash
  };
};

// Test function to call Marvel API
const testMarvelAPI = async () => {
  try {
    const params = {
      ...getAuthParams(),
      titleStartsWith: 'Spider',
      limit: 1
    };
    
    console.log('\nMaking Marvel API request with params:');
    console.log(JSON.stringify(params, null, 2));
    
    // Try comics endpoint instead of characters
    console.log('\nTrying comics endpoint...');
    const response = await axios.get(`${BASE_URL}/comics`, { params });
    
    console.log('\nMarvel API Response:');
    console.log('Status:', response.status);
    console.log('Data:', JSON.stringify(response.data, null, 2).substring(0, 500) + '...');
    
    return response.data;
  } catch (error) {
    console.error('\nMarvel API Error:');
    console.error('Status:', error.response?.status);
    console.error('Status Text:', error.response?.statusText);
    console.error('Message:', error.message);
    console.error('Data:', error.response?.data);
    
    throw error;
  }
};

// Run the test
testMarvelAPI()
  .then(() => console.log('\nTest completed successfully!'))
  .catch(() => console.log('\nTest failed!'));
