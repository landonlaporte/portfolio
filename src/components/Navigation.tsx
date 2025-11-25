import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { profile } from '../data/portfolio';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <a
            href="/"
            onClick={handleLogoClick}
            className="text-2xl font-bold text-slate-900 hover:text-slate-700 transition-colors"
          >
            {profile.name}
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium transition-colors hover:text-slate-900 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-700'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-300 hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-900 hover:text-slate-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-slate-700 hover:text-slate-900 font-medium py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="block w-full text-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
