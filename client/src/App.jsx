import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StyleProvider } from './contexts/StyleContext';
import Home from './Home';
import Portfolio from './pages/Portfolio';
import WhoIam from './pages/WhoIam';
import Contact from './pages/Contact';

export default function App() {
  return (
    <StyleProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/whoiam" element={<WhoIam />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </StyleProvider>
  );
}

