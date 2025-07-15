import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import CharacterDetail from './pages/CharacterDetail';
import ComicsList from './pages/ComicsList';
import Abilities from './pages/Abilities';
import Timeline from './pages/Timeline';
import NotFound from './pages/NotFound';

// Test Components
import MarvelApiTest from './components/MarvelApiTest';
import MockApiTest from './components/MockApiTest';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Styles
import './styles/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/comics" element={<ComicsList />} />
          <Route path="/abilities" element={<Abilities />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/test" element={<MarvelApiTest />} />
          <Route path="/mock" element={<MockApiTest />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
