import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Menu, X } from 'lucide-react';
import { Button } from '../../common/Button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement;
      const isMenuButton = target.closest('button[aria-label="Toggle menu"]');
      
      if (menuRef.current && !menuRef.current.contains(target) && !isMenuButton) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const linkClasses = "text-white hover:text-red-600 transition-colors";
  const mobileLinkClasses = `${linkClasses} py-3 px-4 border-b border-neutral-800 w-full text-left`;
  const btnPrimaryClasses = "bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 transform hover:scale-105";

  const headerVariants = {
    hidden: { y: -60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };
  
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.15,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed top-0 left-0 right-0 z-50 py-2 md:py-3 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center gap-2" aria-label="Home">
          <Dumbbell className="text-red-600" size={30} aria-hidden="true" />
          <span className="text-xl font-bold">NEGREIROS ACADEMIA</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8" role="navigation">
          <motion.a href="#sobre" className={linkClasses} whileHover={{ scale: 1.05 }}>Sobre</motion.a>
          <motion.a href="#equipamentos" className={linkClasses} whileHover={{ scale: 1.05 }}>Equipamentos</motion.a>
          <motion.a href="#planos" className={linkClasses} whileHover={{ scale: 1.05 }}>Planos</motion.a>
          <motion.a href="#galeria" className={linkClasses} whileHover={{ scale: 1.05 }}>Galeria</motion.a>
          <motion.a href="#contato" className={linkClasses} whileHover={{ scale: 1.05 }}>Contato</motion.a>
          <motion.a
            href="https://api.whatsapp.com/send/?phone=5583993444653&text=Ol%C3%A1%2C+quero+me+matricular+na+academia+mais+individualizada+da+regi%C3%A3o%21&type=phone_number&app_absent=0"
            className={btnPrimaryClasses}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
          >
            Matricule-se
          </motion.a>
        </nav>

        <motion.button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </motion.button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden bg-black bg-opacity-95 absolute top-full left-0 right-0 py-4 shadow-xl"
            style={{
              maxHeight: 'calc(100vh - 60px)',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <nav className="container-custom flex flex-col gap-1" role="navigation" aria-label="Mobile menu">
              <motion.a href="#sobre" className={mobileLinkClasses} onClick={closeMenu} whileTap={{ scale: 0.98 }}>Sobre</motion.a>
              <motion.a href="#equipamentos" className={mobileLinkClasses} onClick={closeMenu} whileTap={{ scale: 0.98 }}>Equipamentos</motion.a>
              <motion.a href="#planos" className={mobileLinkClasses} onClick={closeMenu} whileTap={{ scale: 0.98 }}>Planos</motion.a>
              <motion.a href="#galeria" className={mobileLinkClasses} onClick={closeMenu} whileTap={{ scale: 0.98 }}>Galeria</motion.a>
              <motion.a href="#contato" className={mobileLinkClasses} onClick={closeMenu} whileTap={{ scale: 0.98 }}>Contato</motion.a>
              <motion.div className="px-4 py-3" whileTap={{ scale: 0.98 }}>
                <Button
                  href="https://api.whatsapp.com/send/?phone=5583993444653&text=Ol%C3%A1%2C+quero+me+matricular+na+academia+mais+individualizada+da+regi%C3%A3o%21&type=phone_number&app_absent=0"
                  variant="primary"
                  size="sm"
                  isExternal
                  className="w-full text-center"
                >
                  Matricule-se
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};