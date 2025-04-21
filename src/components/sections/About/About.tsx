import { motion } from 'framer-motion';
import { Button } from '../../common/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const About = () => {
  return (
    <motion.section 
      id="sobre" 
      className="py-16 md:py-24 bg-neutral-900 px-5 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <motion.div className="order-2 md:order-1" variants={containerVariants}>
            <motion.h2 
              id="about-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              NOSSA <span className="text-red-500">HISTÓRIA</span>
            </motion.h2>
            
            <div className="space-y-5">
              <motion.p className="text-gray-300 text-lg leading-relaxed" variants={itemVariants}>
                A Academia Negreiros tem um legado de dedicação e paixão pelo treinamento de qualidade. Fundada por Nino Negreiros, 
                a academia se tornou um símbolo de treinamento autêntico e resultados reais na região.
              </motion.p>
              
              <motion.p className="text-gray-300 text-lg leading-relaxed" variants={itemVariants}>
                Após sua heroica luta contra uma doença, Nino Negreiros deixou seu legado para seu filho, Italo Negreiros. 
                Comprometido com os valores e princípios estabelecidos por seu pai, Italo implementou melhorias significativas 
                mantendo a essência que sempre caracterizou a Academia Negreiros.
              </motion.p>
              
              <motion.p className="text-gray-300 text-lg leading-relaxed" variants={itemVariants}>
                Hoje, a Academia Negreiros representa o equilíbrio perfeito entre o respeito pela tradição do "treino raiz" 
                e a inovação tecnológica, oferecendo equipamentos de última geração da renomada marca Romano, todos testados 
                pelo próprio Fernando Sardinha.
              </motion.p>
            </div>

            <motion.div className="mt-8 flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Button 
                href="#equipamentos" 
                variant="primary"
                className="group hover:bg-red-600 transition-colors duration-300"
              >
                Conheça Nosso Espaço
              </Button>
            </motion.div>
          </motion.div>

          <motion.div className="relative order-1 md:order-2" variants={imageVariants}>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg" 
                alt="Interior da Academia Negreiros mostrando equipamentos modernos" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            
            <motion.div 
              className="hidden sm:block absolute -bottom-6 -left-6 w-1/2 aspect-square rounded-xl overflow-hidden border-4 border-red-500 shadow-xl z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg" 
                alt="Treinamento personalizado na Academia Negreiros" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
            </motion.div>
            <motion.div 
              className="hidden md:block absolute -top-6 -right-6 w-24 h-24 bg-red-500/20 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring" }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};