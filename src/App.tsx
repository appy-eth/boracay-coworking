import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import DigitalNomads from './components/DigitalNomads';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Amenities />
      <Gallery />
      <Pricing />
      <DigitalNomads />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
