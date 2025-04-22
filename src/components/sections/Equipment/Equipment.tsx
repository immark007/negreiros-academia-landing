import { Check, Weight, Heart, Dumbbell, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type BenefitItem = {
  text: string;
};

type HighlightCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  benefits: BenefitItem[];
};

const FEATURES: FeatureItem[] = [
  {
    icon: <Weight className="w-10 h-10 text-red-500" aria-hidden="true" />,
    title: "Equipamentos Exclusivos",
    description: "Maquinário de ponta da marca Romano, testado e aprovado por Fernando Sardinha"
  },
  {
    icon: <Heart className="w-10 h-10 text-red-500" aria-hidden="true" />,
    title: "Metodologia Tradicional",
    description: "Treinamento raiz com acompanhamento personalizado para resultados reais"
  },
  {
    icon: <Dumbbell className="w-10 h-10 text-red-500" aria-hidden="true" />,
    title: "Área de Peso Livre",
    description: "Diversos equipamentos para treinos variados e completos"
  },
  {
    icon: <Clock className="w-10 h-10 text-red-500" aria-hidden="true" />,
    title: "Horários Flexíveis",
    description: "Atendemos das 6h às 22h para se adequar à sua rotina"
  }
];

const EQUIPMENT_BENEFITS: BenefitItem[] = [
  { text: "Maquinário de última geração da marca Romano" },
  { text: "Equipamentos biomecânicamente otimizados" },
  { text: "Halteres e anilhas de alta qualidade" },
  { text: "Áreas específicas para cada grupo muscular" },
  { text: "Manutenção periódica garantindo segurança" }
];

const INFRASTRUCTURE_BENEFITS: BenefitItem[] = [
  { text: "Ambiente climatizado para maior conforto" },
  { text: "Vestiários equipados com armários e chuveiros" },
  { text: "Áreas de descanso e recuperação ativa" },
  { text: "Amplo estacionamento gratuito" },
  { text: "Wi-Fi de alta velocidade para alunos" }
];

const BenefitItem: React.FC<BenefitItem> = ({ text }) => (
  <li className="flex items-start">
    <Check className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
    <span className="text-gray-300 text-base leading-relaxed">{text}</span>
  </li>
);

const HighlightCard: React.FC<HighlightCardProps> = ({
  imageUrl,
  imageAlt,
  title,
  benefits
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
  >
    <div className="relative h-56 sm:h-64 overflow-hidden">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/30 to-transparent" />
    </div>
    <div className="p-6 md:p-7">
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{title}</h3>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <BenefitItem key={`benefit-${index}`} text={benefit.text} />
        ))}
      </ul>
    </div>
  </motion.div>
);

export const Equipment: React.FC = () => {
  return (
    <section
      id="equipamentos"
      className="py-16 md:py-24 bg-neutral-900 px-5 sm:px-6 lg:px-8"
      aria-labelledby="equipment-heading"
    >
      <div className="mx-auto max-w-7xl">
        <header className="text-center mb-16 md:mb-20">
          <h2
            id="equipment-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            EQUIPAMENTOS DE <span className="text-red-500">ÚLTIMA GERAÇÃO</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Na Academia Negreiros, você encontra os mais modernos equipamentos da marca Romano,
            conhecida mundialmente por sua qualidade superior e eficácia comprovada. Toda nossa
            estrutura foi meticulosamente planejada para oferecer o melhor ambiente de treino.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {FEATURES.map((feature, index) => (
            <motion.article
              key={`feature-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-neutral-800 p-6 md:p-7 rounded-xl border-l-4 border-red-500 shadow-lg 
                         transition-all duration-300 hover:shadow-xl hover:translate-y-1 group"
            >
              <div
                className="mb-4 p-3 bg-neutral-700 rounded-lg w-max transition-colors duration-300 
                           group-hover:bg-red-500/20"
                aria-hidden="true"
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{feature.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          <HighlightCard
            imageUrl="https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg"
            imageAlt="Equipamentos de musculação modernos"
            title="Equipamentos Premium"
            benefits={EQUIPMENT_BENEFITS}
          />
          <HighlightCard
            imageUrl="https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg"
            imageAlt="Espaço amplo e infraestrutura completa"
            title="Infraestrutura Exclusiva"
            benefits={INFRASTRUCTURE_BENEFITS}
          />
        </div>
      </div>
    </section>
  );
};
