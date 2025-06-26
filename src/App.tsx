import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import FoundingActPage from './pages/FoundingActPage';
import GrantsPage from './pages/GrantsPage';
import StatutePage from './pages/StatutePage';
import PitchDeckPage from './pages/PitchDeckPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/founding-act" element={<FoundingActPage />} />
          <Route path="/grants" element={<GrantsPage />} />
          <Route path="/statute" element={<StatutePage />} />
          <Route path="/pitch-deck" element={<PitchDeckPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;