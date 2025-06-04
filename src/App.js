import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './cum/ScrollToTop.jsx';
import Layout from './pages/Home/layout.jsx';
import AboutUsLayout from './pages/About-us/layout.jsx';
import Terms from './pages/TermsAndCondition/layout.jsx';
import Cummission from './pages/Commission-and-artwork/layout.jsx';
import LiveArtClasses from './pages/Live-Class/layout.jsx';
import ArtEvent  from './pages/Art-Event/layout.jsx';
import CareerPage from './pages/career/layout.jsx';
import ContactPage from './pages/contact/layout.jsx';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about-us" element={<AboutUsLayout />} />
        <Route path="/terms-and-condition" element={<Terms />} />
        <Route path="/commission-and-artwork" element={<Cummission />} />
        <Route path="/live-class" element={<LiveArtClasses/>} />
        <Route path="/art-event" element={<ArtEvent />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
