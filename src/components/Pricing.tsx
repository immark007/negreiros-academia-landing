import React from 'react';
import { motion } from 'framer-motion';

interface Plan {
  name: string;
  price: string;
  period: string;
  highlights: string[];
  features: string[];
  cta: string;
  featured: boolean;
}


interface PricingCardProps {
  plan: Plan;
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`rounded-lg overflow-hidden relative ${
        plan.featured 
          ? 'bg-gradient-to-b from-red-900 to-red-800 shadow-2xl border-2 border-red-600' 
          : 'bg-neutral-800'
      }`}
    >
      {plan.featured && (
      <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
    ★ POPULAR
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
        <div className="flex items-end mb-4">
          <span className="text-4xl font-bold text-white">R$ {plan.price}</span>
          <span className="text-gray-300 ml-2">{plan.period}</span>
        </div>
        
        <div className="space-y-2 mb-6">
          {plan.highlights.map((highlight: string, idx: number) => (
            <p key={`highlight-${idx}`} className="flex items-center text-gray-100">
              <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {highlight}
            </p>
          ))}
        </div>
        
        <hr className="border-gray-700 my-6" />
        
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature: string, idx: number) => (
            <li key={`feature-${idx}`} className="flex items-start text-gray-300">
              <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <motion.a
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          href="https://api.whatsapp.com/send/?phone=5583993444653&text=Ol%C3%A1%2C+quero+me+matricular+na+academia+mais+individualizada+da+regi%C3%A3o%21&type=phone_number&app_absent=0"
          className={`w-full text-center py-3 px-6 rounded-md font-bold transition-colors duration-300 block ${
            plan.featured
              ? 'bg-white text-red-900 hover:bg-gray-100 shadow-lg'
              : 'bg-red-600 text-white hover:bg-red-700 shadow-md'
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {plan.cta}
        </motion.a>
      </div>
    </motion.div>
  );
};

export const Pricing: React.FC = () => {
  const plans: Plan[] = [
    {
      name: "MENSAL PADRÃO",
      price: "59,90",
      period: "Por mês",
      highlights: ["Acesso ilimitado", "Horário flexível", "Acompanhamento básico"],
      features: ["Acesso a todos os equipamentos", "Vestiários", "Professores à disposição", "Ficha de treino básica"],
      cta: "Começar Agora",
      featured: true
    },
    {
      name: "ANUAL",
      price: "169,90",
      period: "A cada 3 meses",
      highlights: ["Economia de 5%", "Acesso ilimitado", "Acompanhamento completo"],
      features: ["Acesso a todos os equipamentos", "Vestiários", "Professores à disposição", "Ficha de treino personalizada", "1 avaliação física", "Programa alimentar básico"],
      cta: "Escolher Este Plano",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="planos" className="py-20 bg-black">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto text-center after:mx-auto text-white">NOSSOS PLANOS</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Oferecemos planos flexíveis que se adaptam às suas necessidades. Escolha o que melhor se encaixa no seu perfil 
            e comece a transformar seu corpo e sua vida hoje mesmo.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {plans.map((plan: Plan, index: number) => (
            <PricingCard key={`plan-${index}`} plan={plan} index={index} />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-6">
            Planos especiais para empresas e grupos também estão disponíveis. Entre em contato para saber mais detalhes.
          </p>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://api.whatsapp.com/send/?phone=5583993444653&text=Ol%C3%A1%2C+quero+saber+mais+sobre+os+planos+especiais+da+Academia+Negreiros%21&type=phone_number&app_absent=0" 
            className="inline-block text-red-400 hover:text-red-300 font-bold transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale com nossa equipe para um plano personalizado →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};