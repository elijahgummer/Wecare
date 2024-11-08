import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CallToAction from './components/callToAction';
import Footer from './components/Footer';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About'; // Updated import to match the correct file name
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

// Page Components
function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <CallToAction />
    </div>
  );
}

function NotFoundPage() {
  return <div><h1>404 - Page Not Found</h1></div>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} /> {/* Fixed the path */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
