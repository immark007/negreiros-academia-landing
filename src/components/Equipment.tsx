import React from 'react';
import { Check, Weight, Heart, Dumbbell, Clock } from 'lucide-react';

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
    icon: <Weight className="w-8 h-8 text-red-600" aria-hidden="true" />,
    title: "Equipamentos Exclusivos",
    description: "Maquinário de ponta da marca Romano, testado pelo próprio Fernando Sardinha"
  },
  {
    icon: <Heart className="w-8 h-8 text-red-600" aria-hidden="true" />,
    title: "Metodologia Tradicional",
    description: "Treinamento raiz com o acompanhamento que você precisa para resultados reais"
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-red-600" aria-hidden="true" />,
    title: "Área de Peso Livre",
    description: "Diversos equipamentos para treinos variados e completos"
  },
  {
    icon: <Clock className="w-8 h-8 text-red-600" aria-hidden="true" />,
    title: "Horários Flexíveis",
    description: "Horários amplos para se adequar à sua rotina"
  }
];

const EQUIPMENT_BENEFITS: BenefitItem[] = [
  { text: "Maquinário de última geração da marca Romano" },
  { text: "Equipamentos biomecânicamente otimizados" },
  { text: "Halteres e anilhas de alta qualidade" },
  { text: "Áreas específicas para cada grupo muscular" }
];

const INFRASTRUCTURE_BENEFITS: BenefitItem[] = [
  { text: "Ambiente climatizado para maior conforto" },
  { text: "Vestiários equipados com armários e chuveiros" },
  { text: "Áreas de descanso e recuperação" },
  { text: "Amplo estacionamento para maior comodidade" }
];

const BenefitItem: React.FC<BenefitItem> = ({ text }) => (
  <li className="flex items-start">
    <Check 
      className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" 
      aria-hidden="true" 
    />
    <span className="text-sm md:text-base">{text}</span>
  </li>
);

const HighlightCard: React.FC<HighlightCardProps> = ({ 
  imageUrl, 
  imageAlt, 
  title, 
  benefits 
}) => (
  <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl">
    <img 
      src={imageUrl} 
      alt={imageAlt} 
      className="w-full h-48 sm:h-64 object-cover"
      loading="lazy"
    />
    <div className="p-5 md:p-6">
      <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{title}</h3>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <BenefitItem key={`benefit-${index}`} text={benefit.text} />
        ))}
      </ul>
    </div>
  </div>
);
export const Equipment: React.FC = () => {
  return (
    <section 
      id="equipamentos" 
      className="py-12 md:py-20 bg-neutral-900 px-4 sm:px-6 lg:px-8"
      aria-labelledby="equipment-heading"
    >
      <div className="mx-auto max-w-7xl">
        <header className="text-center mb-12 md:mb-16">
          <h2 
            id="equipment-heading"
            className="section-title mx-auto text-center after:mx-auto"
          >
            EQUIPAMENTOS DE ÚLTIMA GERAÇÃO
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Na Academia Negreiros, você encontra os mais modernos equipamentos da marca Romano, 
            conhecida por sua qualidade superior e eficácia comprovada. Toda nossa estrutura 
            foi planejada para oferecer o melhor ambiente de treino possível.
          </p>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {FEATURES.map((feature, index) => (
            <article 
              key={`feature-${index}`}
              className="bg-neutral-800 p-5 md:p-6 rounded-lg border-t-4 border-red-600 shadow-lg 
                        transform transition-transform hover:scale-105"
            >
              <div className="mb-3 md:mb-4" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{feature.description}</p>
            </article>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <HighlightCard
            imageUrl="https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg"
            imageAlt="Equipamentos de musculação"
            title="Equipamentos de Musculação"
            benefits={EQUIPMENT_BENEFITS}
          />

          <HighlightCard
            imageUrl="https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg"
            imageAlt="Espaço e infraestrutura"
            title="Infraestrutura Completa"
            benefits={INFRASTRUCTURE_BENEFITS}
          />
        </div>
      </div>
    </section>
  );
};