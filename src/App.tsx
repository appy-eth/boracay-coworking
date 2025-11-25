import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import GettingToBoracay from './components/GettingToBoracay';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getting-to-boracay" element={<GettingToBoracay />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
