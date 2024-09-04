import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CallToAction from './components/callToAction';
import Footer from './components/Footer';
import React, { useState } from 'react';

// Example Page Components
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

function ServicesPage() {
  return <div><h1>Our Services</h1></div>;
}

function AboutPage() {
  return <div><h1>About Us</h1></div>;
}

function ContactPage() {
  return <div><h1>Contact Us</h1></div>;
}

function NotFoundPage() {
  return <div><h1>404 - Page Not Found</h1></div>;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
