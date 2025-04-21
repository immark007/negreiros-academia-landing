import { Dumbbell, ArrowRight, Instagram, MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../../common/Button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto py-12 md:py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <Dumbbell className="text-red-600" size={28} />
              <span className="text-2xl font-bold tracking-tight">NEGREIROS ACADEMIA</span>
            </div>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Onde o treinamento raiz encontra equipamentos de última geração.
            </p>
            <Button
  href="https://api.whatsapp.com/send/?phone=5583993444653&text=Ol%C3%A1%2C+quero+me+matricular+na+academia+mais+individualizada+da+regi%C3%A3o%21&type=phone_number&app_absent=0"
  variant="primary"
  isExternal
>
  Matricule-se Agora
</Button>
          </motion.div>
          <motion.div variants={itemVariants} className="md:pl-8">
            <h3 className="text-xl font-bold mb-6 text-white">Links Rápidos</h3>
            <ul className="space-y-4">
              {['Sobre Nós', 'Equipamentos', 'Planos', 'Galeria', 'Contato'].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-red-600 transition-colors duration-300 text-lg flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-red-600" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-white">Contato</h3>
            <ul className="space-y-5">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="text-red-600 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <a 
                    href="https://api.whatsapp.com/send/?phone=5583993444653" 
                    className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (83) 99344-4653
                  </a>
                </div>
              </motion.li>

              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Instagram className="text-red-600 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Instagram</p>
                  <a 
                    href="https://www.instagram.com/negreirosacademia/" 
                    className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @negreirosacademia
                  </a>
                </div>
              </motion.li>

              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="text-red-600 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Endereço</p>
                  <a 
                    href="https://goo.gl/maps/example" 
                    className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rua José Celestino de Farias, 09<br />
                    Bairro Central, Mamanguape - PB
                  </a>
                </div>
              </motion.li>

              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Clock className="text-red-600 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Horário</p>
                  <p className="text-gray-400">
                    Seg-Sex: 6h às 22h<br />
                    Sábado: 8h às 16h
                  </p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        <motion.div 
          variants={itemVariants}
          className="border-t border-neutral-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm md:text-base">
            &copy; {currentYear} Academia Negreiros. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-gray-500 text-xs md:text-sm">
            Desenvolvido com ❤️ por Marcos Kauã
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};