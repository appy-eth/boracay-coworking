import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import HomeKo from './components/ko/HomeKo';
import HomeCn from './components/cn/HomeCn';
import GettingToBoracay from './components/GettingToBoracay';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kr" element={<HomeKo />} />
          <Route path="/cn" element={<HomeCn />} />
          <Route path="/getting-to-boracay" element={<GettingToBoracay />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
