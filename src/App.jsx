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

function AboutPage() {
  return (
    <div>
      <About />
    </div>
  );
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
      case 'about':
        return <AboutPage />;
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
