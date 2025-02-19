import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CV from './pages/Cv';  
import Portfolio from './pages/Portfolio';  
import Contact from './pages/Contact';  
import About from './pages/About';

import NotFound from './pages/NotFound';
import Footer from './components/Footer';


export default function App() {
  return (
    <BrowserRouter basename="/lab2react">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

