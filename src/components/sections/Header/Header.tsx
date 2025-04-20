import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';
import { Button } from '../../common/Button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    const debouncedScroll = () => {
      let ticking = false;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', debouncedScroll);
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const linkClasses = "text-white hover:text-red-600 transition-colors";
  const mobileLinkClasses = `${linkClasses} py-2 border-b border-neutral-800 w-full text-left`;

  const btnPrimaryClasses = "bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 transform hover:scale-105";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-90 py-2 shadow-lg' : 'bg-transparent py-4'
        }`}
      role="banner"
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center gap-2" aria-label="Home">
          <Dumbbell className="text-red-600" size={30} aria-hidden="true" />
          <span className="text-xl font-bold">NEGREIROS ACADEMIA</span>
        </a>

        <nav className="hidden md:flex items-center gap-8" role="navigation">
          <a href="#sobre" className={linkClasses}>Sobre</a>
          <a href="#equipamentos" className={linkClasses}>Equipamentos</a>
          <a href="#planos" className={linkClasses}>Planos</a>
          <a href="#galeria" className={linkClasses}>Galeria</a>
          <a href="#contato" className={linkClasses}>Contato</a>
          <a
            href="https://api.whatsapp.com/send/?phone=5583993444653&text=Ol%C3%A1%2C+quero+me+matricular+na+academia+mais+individualizada+da+regi%C3%A3o%21&type=phone_number&app_absent=0"
            className={btnPrimaryClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            Matricule-se
          </a>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 absolute top-full left-0 right-0 py-4">
          <nav
            className="container-custom flex flex-col gap-4"
            role="navigation"
            aria-label="Mobile menu"
          >
            <a href="#sobre" className={mobileLinkClasses} onClick={closeMenu}>Sobre</a>
            <a href="#equipamentos" className={mobileLinkClasses} onClick={closeMenu}>Equipamentos</a>
            <a href="#planos" className={mobileLinkClasses} onClick={closeMenu}>Planos</a>
            <a href="#galeria" className={mobileLinkClasses} onClick={closeMenu}>Galeria</a>
            <a href="#contato" className={mobileLinkClasses} onClick={closeMenu}>Contato</a>
            <Button
              href="https://api.whatsapp.com/send/?phone=5583993444653&text=Ol%C3%A1%2C+quero+me+matricular+na+academia+mais+individualizada+da+regi%C3%A3o%21&type=phone_number&app_absent=0"
              variant="primary"
              size="sm"
              isExternal
              className="self-start mt-2"
            >
              Matricule-se
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};