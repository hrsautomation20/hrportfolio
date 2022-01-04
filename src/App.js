import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import SmoothScrollbar from './components/SmoothScrollbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScrollbar>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </SmoothScrollbar>
      </Router>
    </>
  );
}
