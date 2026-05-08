import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
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
import BackToTop from './components/BackToTop';
import ProjectDetail from './components/ProjectDetail';
import './index.css';

const hasSeenLoader = sessionStorage.getItem('loaderSeen');

function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <About />
      <Contact />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(!hasSeenLoader);

  const handleLoaderDone = () => {
    sessionStorage.setItem('loaderSeen', '1');
    setLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" onDone={handleLoaderDone} />}
      </AnimatePresence>

      {!loading && (
        <Router>
          <Cursor />
          <ScrollProgress />
          <BackToTop />
          <div className="app">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work/:slug" element={<ProjectDetail />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
