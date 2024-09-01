import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CTA from './components/CTA';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About /> 
      <Services />
      <CTA />
    </div>
  );
}
export default App;
