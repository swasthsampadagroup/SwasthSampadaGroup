import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Pharma from '@/pages/Pharma';
import FarmsCottage from '@/pages/FarmsCottage';
import CuminOrganics from '@/pages/CuminOrganics';
import WindEnergy from '@/pages/WindEnergy';
import Contact from '@/pages/Contact';
import Career from "@/pages/Career";
import SwasthSampadaHealthcare from '@/pages/Pharma/SwasthSampadaHealthcare';
import SimpsonHealthcare from '@/pages/Pharma/SimpsonHealthcare';
import CommonBrands from '@/pages/Pharma/CommonBrands';
import ManufacturingBrands from '@/pages/Pharma/ManufacturingBrands';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pharma" element={<Pharma />} />
            <Route
              path="/pharma/swasthsampadahealthcare"
              element={<SwasthSampadaHealthcare />}
            />
            <Route
              path="/pharma/simpsonhealthcare"
              element={<SimpsonHealthcare />}
            />
            <Route
              path="/pharma/commonbrands"
              element={<CommonBrands />}
            />
             <Route
              path="/pharma/manufacturingbrands"
              element={<ManufacturingBrands />}
            />
            <Route path="/farms-cottage" element={<FarmsCottage />} />
            <Route path="/cumin-organics" element={<CuminOrganics />} />
            <Route path="/wind-energy" element={<WindEnergy />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
