import crypto from 'crypto';
import fs from 'fs';
import dotenv from 'dotenv';

// Initialize dotenv
dotenv.config();

// Get keys from environment variables
const publicKey = process.env.VITE_MARVEL_PUBLIC_KEY || process.env.MARVEL_PUBLIC_KEY;
const privateKey = process.env.MARVEL_PRIVATE_KEY;

// Set timestamp (you can use any string, but '1' is simple for testing)
const ts = '1';

// Create the string to hash: ts + privateKey + publicKey
const stringToHash = ts + privateKey + publicKey;

// Generate MD5 hash
const hash = crypto.createHash('md5').update(stringToHash).digest('hex');

console.log('=== Marvel API Authentication Parameters ===');
console.log('Timestamp:', ts);
console.log('Public Key:', publicKey);
console.log('Private Key:', privateKey ? '[HIDDEN]' : 'Not found in environment variables');
console.log('String to Hash:', stringToHash.replace(privateKey, '[PRIVATE_KEY]'));
console.log('MD5 Hash:', hash);
console.log('\n=== Full API URL ===');
console.log(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=Spider&limit=10`);
