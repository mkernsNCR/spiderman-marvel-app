import React, { useState } from 'react';
import axios from 'axios';

const MarvelApiTest = () => {
  const [result, setResult] = useState('Click the button to test the Marvel API');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const testDirectMarvelApi = async () => {
    setLoading(true);
    setError(null);
    setResult('Testing Marvel API...');
    
    try {
      // Marvel API credentials
      const PUBLIC_KEY = 'e632a7169a7a6780de47440d6e2c31cc';
      const timestamp = new Date().getTime();
      
      // Make direct request to Marvel API (client-side)
      const response = await axios.get('https://gateway.marvel.com/v1/public/characters', {
        params: {
          apikey: PUBLIC_KEY,
          ts: timestamp,
          nameStartsWith: 'Spider',
          limit: 1
        }
      });
      
      setResult(JSON.stringify(response.data, null, 2));
    } catch (error) {
      setError({
        status: error.response?.status,
        statusText: error.response?.statusText,
        message: error.message,
        data: error.response?.data
      });
      setResult('Error occurred. See details below.');
    } finally {
      setLoading(false);
    }
  };

  const testBackendProxy = async () => {
    setLoading(true);
    setError(null);
    setResult('Testing backend proxy...');
    
    try {
      // Make request through backend proxy
      const response = await axios.get('/api/characters');
      
      setResult(JSON.stringify(response.data, null, 2));
    } catch (error) {
      setError({
        status: error.response?.status,
        statusText: error.response?.statusText,
        message: error.message,
        data: error.response?.data
      });
      setResult('Error occurred. See details below.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Marvel API Test</h1>
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={testDirectMarvelApi} 
          disabled={loading}
          style={{ 
            padding: '10px 20px', 
            marginRight: '10px',
            backgroundColor: '#e23636', 
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          Test Direct Marvel API
        </button>
        <button 
          onClick={testBackendProxy} 
          disabled={loading}
          style={{ 
            padding: '10px 20px',
            backgroundColor: '#518cca', 
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          Test Backend Proxy
        </button>
      </div>
      
      {loading && <p>Loading...</p>}
      
      <pre style={{ 
        padding: '15px', 
        backgroundColor: '#f5f5f5', 
        border: '1px solid #ddd',
        borderRadius: '4px',
        overflow: 'auto',
        maxHeight: '400px'
      }}>
        {result}
      </pre>
      
      {error && (
        <div style={{ marginTop: '20px' }}>
          <h3>Error Details:</h3>
          <pre style={{ 
            padding: '15px', 
            backgroundColor: '#fff0f0', 
            border: '1px solid #ffcccc',
            borderRadius: '4px',
            overflow: 'auto',
            maxHeight: '300px'
          }}>
            {JSON.stringify(error, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default MarvelApiTest;
