import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/home';
import Projects from './components/projects';
import Journey from './components/journey';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/journey" element={<Journey />} />
      </Routes>
    </Router>
  );
};

export default App;
