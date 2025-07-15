import express from 'express';

const router = express.Router();

/**
 * @route   GET /api/test
 * @desc    Test endpoint
 * @access  Public
 */
router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Test endpoint working',
    data: {
      name: 'Spider-Man Facts API',
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development'
    }
  });
});

/**
 * @route   POST /api/test
 * @desc    Test POST endpoint
 * @access  Public
 */
router.post('/', (req, res) => {
  const { body } = req;
  
  res.status(200).json({
    status: 'success',
    message: 'Test POST endpoint working',
    receivedData: body,
    timestamp: new Date().toISOString()
  });
});

export default router;
