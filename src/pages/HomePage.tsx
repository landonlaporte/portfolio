import { useEffect } from 'react';
import Hero from '../components/Hero';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';

function HomePage() {
  useEffect(() => {
    document.title = 'Landon LaPorte, PhD';
  }, []);

  return (
    <>
      <Hero />
      <Work />
      <About />
      <Contact />
    </>
  );
}

export default HomePage;
