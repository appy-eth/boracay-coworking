import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import HomeKo from './components/ko/HomeKo';
import HomeCn from './components/cn/HomeCn';
import GettingToBoracay from './components/GettingToBoracay';
import Footer from './components/Footer';
import FooterKo from './components/ko/FooterKo';
import FooterCn from './components/cn/FooterCn';

function FooterWrapper() {
  const location = useLocation();
  
  if (location.pathname === '/kr') {
    return <FooterKo />;
  }
  if (location.pathname === '/cn') {
    return <FooterCn />;
  }
  return <Footer />;
}

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
        <FooterWrapper />
      </div>
    </Router>
  );
}

export default App;
