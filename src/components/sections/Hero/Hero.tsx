import { motion } from 'framer-motion';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 }, 
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 md:pt-0">
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        initial="hidden"
        animate="visible"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          filter: "brightness(0.3)",
        }}
      ></motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-black/70 z-10"></div>

      <motion.div
        className="container-custom relative z-20 text-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-6 tracking-tight leading-tight"
        >
          <span className="text-[var(--color-light)] text-5xl md:text-5xl lg:text-6xl">ACADEMIA</span>{' '}
          <span className="text-[var(--color-primary)] text-5xl md:text-6xl lg:text-7xl block md:inline-block mt-2 md:mt-0">NEGREIROS</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto text-[var(--color-foreground)]"
        >
          Onde o treinamento raiz encontra equipamentos de última geração
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
        >
          <a
            href="#planos"
            className="btn-primary bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] hover:scale-105 hover:shadow-lg text-[var(--color-light)] font-bold py-2 px-4 md:py-3 md:px-6 rounded-md transition duration-300 transform text-sm md:text-base"
          >
            Conheça Nossos Planos
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5583993444653&text=Ol%C3%A1%2C+quero+me+matricular+na+academia+mais+individualizada+da+regi%C3%A3o%21&type=phone_number&app_absent=0"
            className="bg-[var(--color-bg)] hover:bg-[var(--color-hover-dark)] text-[var(--color-light)] font-bold py-2 px-4 md:py-3 md:px-6 rounded-md transition duration-300 inline-block border border-[var(--color-primary)] text-sm md:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale Conosco
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          delay: 1.5,
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg className="w-6 h-6 text-[var(--color-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};