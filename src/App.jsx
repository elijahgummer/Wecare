import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CallToAction from './components/callToAction';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About /> 
      <Services />
      <CallToAction />
      <Footer />
    </div>
  );
}
export default App;
