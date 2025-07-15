# Spiderman Facts Website

A comprehensive full-stack application showcasing Spiderman facts, abilities, comics, and more using the Marvel Comics API. The application includes a mock API implementation for development and testing purposes.

**Live Site:** [https://spiderman-marvel-app.vercel.app/](https://spiderman-marvel-app.vercel.app/)

![Spiderman Facts Website](https://i.imgur.com/placeholder-image.png)

## Features

- Browse Spiderman's appearances in Marvel comics
- View detailed information about Spiderman's abilities and powers
- Search for specific Spiderman comics and stories
- Dark/Light mode toggle
- Responsive design for all devices
- Interactive UI with filtering and sorting options
- Secure API integration with Marvel Comics API
- Mock API implementation for development and testing
- Modern, visually appealing profile/details section
- Professional footer with newsletter subscription and social links

## Technologies Used

### Frontend
- React 18 with Vite
- React Router DOM for navigation
- Axios for HTTP requests
- CSS for styling (with dark/light mode)
- Context API for state management

### Backend
- Express.js
- Node.js
- CORS for cross-origin requests
- Body-parser for request body parsing
- MD5 for Marvel API authentication

### Testing
- Chai for assertions
- Mocha for test framework
- Sinon for mocks and stubs
- JSDOM for browser environment simulation

### Development Tools
- ESLint for code linting
- Prettier for code formatting
- Nodemon for server auto-restart
- Concurrently for running multiple scripts

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Marvel API keys (public and private) from [Marvel Developer Portal](https://developer.marvel.com/)

## Project Structure

```
spiderman-marvel-app/
├── src/                    # Frontend source files
│   ├── assets/             # Images, icons, and other static files
│   ├── components/         # Reusable React components
│   ├── context/            # React context providers
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── services/           # API service modules
│   ├── styles/             # CSS stylesheets
│   ├── utils/              # Utility functions
│   ├── App.jsx             # Main App component
│   └── main.jsx            # React entry point
├── server/                 # Backend source files
│   ├── config/             # Server configuration
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Express middleware
│   ├── models/             # Data models
│   ├── routes/             # API routes
│   ├── utils/              # Server utility functions
│   └── index.js            # Express server entry point
├── tests/                  # Test files
│   ├── unit/               # Unit tests
│   ├── integration/        # Integration tests
│   ├── helpers/            # Test helpers and fixtures
│   └── setup.js            # Test setup configuration
├── .env                    # Environment variables (not in git)
├── .env.example            # Example environment variables
├── .eslintrc.js            # ESLint configuration
├── .prettierrc             # Prettier configuration
├── .gitignore              # Git ignore file
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository**
```bash
git clone <repository-url>
cd spiderman-marvel-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   ```bash
   cp .env.example .env
   ```
   - Open `.env` and add your Marvel API keys:
   ```
   # Server Configuration
   PORT=5002
   NODE_ENV=development

   # Marvel API Keys
   MARVEL_PUBLIC_KEY=your_public_key_here
   MARVEL_PRIVATE_KEY=your_private_key_here

   # Frontend Environment Variables (must be prefixed with VITE_)
   VITE_MARVEL_PUBLIC_KEY=your_public_key_here
   ```

4. **Start the development server**
```bash
npm run dev
```

This will start both the frontend (Vite) and backend (Express) servers concurrently.

- Frontend: http://localhost:3000
- Backend: http://localhost:5002

5. **Build for production**
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Available Scripts

- `npm run dev` - Start both frontend and backend development servers
- `npm run build` - Build the frontend for production
- `npm run test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run server` - Start only the backend server
- `npm run client` - Start only the frontend development server
- `npm run lint` - Run ESLint on all files
- `npm run format` - Format all files with Prettier

## API Endpoints

### Health and Test Endpoints
- `GET /api/health` - Check API health
- `GET /api/test` - Test GET endpoint
- `POST /api/test` - Test POST endpoint

### Character Endpoints
- `GET /api/characters` - Get Marvel characters (with optional query parameters)
- `GET /api/characters/:id` - Get specific character details by ID
- `GET /api/characters/:id/comics` - Get comics featuring a specific character

### Comics Endpoints
- `GET /api/comics` - Get comics list (with optional query parameters)
- `GET /api/comics/:id` - Get specific comic details by ID
- `GET /api/comics/character/:characterId` - Get comics by character ID

## Marvel API Integration

This project uses the Marvel Comics API. To use the API, you need to:

1. Register at [Marvel Developer Portal](https://developer.marvel.com/)
2. Get your public and private API keys
3. Add them to your `.env` file
4. API calls are authenticated using a timestamp, public key, and an MD5 hash

### Authentication Process
The Marvel API requires the following parameters for authentication:
- `ts`: A timestamp
- `apikey`: Your public key
- `hash`: An MD5 digest of the ts parameter, your private key, and your public key

Example:
```javascript
const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);
```

## Troubleshooting

### Common Issues

1. **API Key Issues**
   - Make sure your Marvel API keys are correctly set in the `.env` file
   - Verify that you're using the correct keys for public and private
   - Check that frontend variables are prefixed with `VITE_`

2. **CORS Errors**
   - The server has CORS middleware enabled, but if you're getting CORS errors, check that the server is running
   - Verify the proxy settings in `vite.config.js`

3. **Build Issues**
   - If you encounter build issues, try clearing the cache:
   ```bash
   npm run clean
   ```
   - Then reinstall dependencies:
   ```bash
   npm install
   ```

4. **Testing Issues**
   - If tests are failing, make sure you have the correct test environment:
   ```bash
   npm run test:setup
   ```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

ISC

## Acknowledgments

- [Marvel Comics API](https://developer.marvel.com/) for providing the data
- All Marvel characters and content are property of Marvel Entertainment, LLC
