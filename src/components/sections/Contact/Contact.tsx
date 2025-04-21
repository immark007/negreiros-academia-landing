import { Phone, Instagram, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../../common/Button';
interface ContactItem {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

export const Contact = () => {
  const contactItems: ContactItem[] = [
    {
      icon: <Phone className="text-red-600 w-6 h-6 mr-4 flex-shrink-0" />,
      title: "WhatsApp",
      content: (
        <a 
          href="https://api.whatsapp.com/send/?phone=5583993444653&text=Ol%C3%A1%2C+quero+me+matricular+na+academia+mais+individualizada+da+regi%C3%A3o%21&type=phone_number&app_absent=0" 
          className="text-gray-300 hover:text-red-600 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          (83) 99344-4653
        </a>
      )
    },
    {
      icon: <Instagram className="text-red-600 w-6 h-6 mr-4 flex-shrink-0" />,
      title: "Instagram",
      content: (
        <a 
          href="https://www.instagram.com/negreirosacademia/" 
          className="text-gray-300 hover:text-red-600 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          @negreirosacademia
        </a>
      )
    },
    {
      icon: <MapPin className="text-red-600 w-6 h-6 mr-4 flex-shrink-0" />,
      title: "Endereço",
      content: (
        <a
          href="https://goo.gl/maps/9mNqQ2Z2Z2Z2Z2Z2Z"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-red-600 transition-colors duration-200"
        >
          Rua José Celestino de Farias, 09<br />
          Bairro Central<br />
          Mamanguape - PB
        </a>
      )
    },
    {
      icon: <Clock className="text-red-600 w-6 h-6 mr-4 flex-shrink-0" />,
      title: "Horário de Funcionamento",
      content: (
        <p className="text-gray-300">
          Segunda a Sexta: 6h às 22h<br />
          Sábado: 8h às 16h<br />
          Domingo: Fechado
        </p>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contato" className="py-16 md:py-20 bg-black">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            FALE <span className="text-red-500">CONOSCO</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Estamos prontos para atender você e responder a todas as suas dúvidas. Entre em contato ou venha nos visitar!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-neutral-800 rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="space-y-6 md:space-y-8">
                {contactItems.map((item, index) => (
                  <motion.div 
                    key={`contact-item-${index}`}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    {item.icon}
                    <div>
                      <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                      <div className="text-gray-300 text-base">
                        {item.content}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                variants={itemVariants}
                className="mt-8 md:mt-10"
              >
              <Button
  href="https://api.whatsapp.com/send/?phone=5583993444653&text=Ol%C3%A1%2C+quero+me+matricular+na+academia+mais+individualizada+da+regi%C3%A3o%21&type=phone_number&app_absent=0"
  variant="primary"
  size="lg"
  isExternal
>
  Agende uma Visita
</Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-xl overflow-hidden h-80 md:h-96 relative shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.634879033872!2d-35.1325458!3d-6.8364769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ad070274e85173%3A0xb8d3dc0f5a6e0665!2sNegreiros%20Academia!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Localização da Academia Negreiros"
            ></iframe>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Siga-nos nas Redes Sociais</h3>
          <div className="flex justify-center gap-4">
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/negreirosacademia/" 
              className="bg-neutral-800 p-3 rounded-full hover:bg-gradient-to-r from-red-600 to-pink-600 transition-all duration-300 shadow hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};