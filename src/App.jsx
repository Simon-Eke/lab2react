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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/lab2react/" element={<Home />} />
        <Route path="/lab2react/cv" element={<CV />} />
        <Route path="/lab2react/portfolio" element={<Portfolio />} />
        <Route path="/lab2react/contact" element={<Contact />} />
        <Route path="/lab2react/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

