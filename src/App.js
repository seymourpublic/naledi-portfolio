import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Marquee from './components/Marquee';
import ScrollProgress from './components/ScrollProgress';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <Router>
          <Cursor />
          <ScrollProgress />
          <div className="app">
            <Header />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Marquee />
                  <Projects />
                  <Skills />
                  <Experience />
                  <Education />
                  <About />
                  <Contact />
                </>
              } />
            </Routes>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
