import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Routes
import healthRoutes from './routes/health.js';
import testRoutes from './routes/test.js';
import charactersRoutes from './routes/characters.js';
import comicsRoutes from './routes/comics.js';
import mockApiRoutes from './routes/mock-api.js';

// Middleware
import { requestLogger } from './middleware/logger.js';
import { errorHandler } from './middleware/errorHandler.js';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5002; // Changed to 5002 to avoid conflicts

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// API Routes
app.use('/api/health', healthRoutes);
app.use('/api/test', testRoutes);
app.use('/api/characters', charactersRoutes);
app.use('/api/comics', comicsRoutes);
app.use('/api/mock', mockApiRoutes); // Mock API routes for development

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React app
  const distPath = path.resolve(__dirname, '../dist');
  app.use(express.static(distPath));

  // For any request that doesn't match one above, send the index.html file
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
