import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Button } from '../../common/Button';

interface Plan {
  name: string;
  price: string;
  period: string;
  discount?: string;
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: {
      y: -8,
      transition: { 
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
        plan.featured
          ? 'border-2 border-red-500 shadow-2xl shadow-red-500/20'
          : 'border border-neutral-700'
      }`}
    >
      {plan.featured && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-red-800 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-md z-10">
          <Star className="w-3 h-3 mr-1" />
          POPULAR
        </div>
      )}

      <div className={`h-full flex flex-col ${
        plan.featured 
          ? 'bg-gradient-to-b from-neutral-900 to-neutral-800' 
          : 'bg-neutral-900'
      }`}
      >
        <div className="p-8 flex-1">
          <div className="mb-6">
            <h3 className={`text-2xl font-bold mb-2 ${
              plan.featured ? 'text-white' : 'text-neutral-300'
            }`}>
              {plan.name}
            </h3>
            
            <div className="flex items-end">
              <span className={`text-4xl font-bold ${
                plan.featured ? 'text-white' : 'text-white'
              }`}>
                R$ {plan.price}
              </span>
              <span className="text-neutral-400 ml-2 mb-1">{plan.period}</span>
            </div>

            {plan.discount && (
              <p className="text-green-400 text-sm mt-1">
                {plan.discount} de desconto
              </p>
            )}
          </div>

          <div className="mb-6 space-y-3">
            {plan.highlights.map((highlight, idx) => (
              <div key={`highlight-${idx}`} className="flex items-center">
                <div className="p-1 bg-red-500/10 rounded-full mr-3">
                  <Check className="w-4 h-4 text-red-400" />
                </div>
                <span className="text-neutral-200">{highlight}</span>
              </div>
            ))}
          </div>

          <hr className="border-neutral-800 my-6" />

          <ul className="mb-8 space-y-3">
            {plan.features.map((feature, idx) => (
              <li key={`feature-${idx}`} className="flex items-start">
                <Check className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-8 pb-8">
          <Button
            href="https://api.whatsapp.com/send/?phone=5583993444653&text=Ol%C3%A1%2C+quero+me+matricular+na+academia+mais+individualizada+da+regi%C3%A3o%21&type=phone_number&app_absent=0"
            variant={plan.featured ? 'primary' : 'secondary'}
            size="lg"
            fullWidth
            icon={<ArrowRight />}
            iconPosition="right"
            className="group"
            target="_blank"
            rel="noopener noreferrer"
          >
            {plan.cta}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export const Pricing: React.FC = () => {
  const plans: Plan[] = [
    {
      name: "Plano Mensal",
      price: "59,90",
      period: "/mês",
      highlights: [
        "Acesso ilimitado",
        "Horário flexível",
        "Acompanhamento básico"
      ],
      features: [
        "Acesso a todos os equipamentos",
        "Vestiários completos",
        "Professores à disposição",
        "Ficha de treino básica",
        "Área de peso livre"
      ],
      cta: "Começar Agora",
      featured: true
    },
    {
      name: "Plano Trimestral",
      price: "169,90",
      period: "/3 meses",
      discount: "5% de desconto",
      highlights: [
        "Economize 5%",
        "Acesso ilimitado",
        "Acompanhamento completo"
      ],
      features: [
        "Todas vantagens do plano mensal",
        "Ficha de treino personalizada",
        "1 avaliação física",
        "Programa alimentar básico",
        "Prioridade no atendimento"
      ],
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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="planos" className="py-24 bg-neutral-950 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            NOSSOS <span className="text-red-500">PLANOS</span>
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Oferecemos planos flexíveis que se adaptam às suas necessidades. Escolha o que melhor se encaixa no seu perfil 
            e comece sua transformação hoje mesmo.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan, index) => (
            <PricingCard key={`plan-${index}`} plan={plan} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-400 mb-6 max-w-2xl mx-auto leading-relaxed">
            Planos corporativos e personalizados disponíveis para grupos e necessidades específicas.
          </p>
          <Button
            href="https://api.whatsapp.com/send/?phone=5583993444653&text=Ol%C3%A1%2C+quero+saber+mais+sobre+os+planos+especiais+da+Academia+Negreiros%21&type=phone_number&app_absent=0"
            variant="text"
            size="md"
            icon={<ArrowRight />}
            iconPosition="right"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale com nossa equipe
          </Button>
        </motion.div>
      </div>
    </section>
  );
};