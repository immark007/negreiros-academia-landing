import React from 'react';
import { ArrowRight } from 'lucide-react';

export const About = () => {
  return (
    <section id="sobre" className="py-12 md:py-20 bg-neutral-800 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title">NOSSA HISTÓRIA</h2>
            <p className="text-gray-300 mb-4 md:mb-6">
              A Academia Negreiros tem um legado de dedicação e paixão pelo treinamento de qualidade. Fundada por Nino Negreiros, 
              a academia se tornou um símbolo de treinamento autêntico e resultados reais na região.
            </p>
            <p className="text-gray-300 mb-4 md:mb-6">
              Após sua heroica luta contra uma doença, Nino Negreiros deixou seu legado para seu filho, Italo Negreiros. 
              Comprometido com os valores e princípios estabelecidos por seu pai, Italo implementou melhorias significativas 
              mantendo a essência que sempre caracterizou a Academia Negreiros.
            </p>
            <p className="text-gray-300 mb-6">
              Hoje, a Academia Negreiros representa o equilíbrio perfeito entre o respeito pela tradição do "treino raiz" 
              e a inovação tecnológica, oferecendo equipamentos de última geração da renomada marca Romano, todos testados 
              pelo próprio Fernando Sardinha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8">
              <a 
                href="#equipamentos" 
                className="btn-primary group inline-flex items-center gap-2 transition-all duration-300 hover:gap-3"
              >
                Conheça Nosso Espaço
                <ArrowRight 
              className="inline-block transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
              size={18}
            />
              </a>
            </div>
          </div>

          <div className="relative order-1 md:order-2 mt-0 md:mt-0">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Academia Negreiros por dentro" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-1/2 aspect-square rounded-lg overflow-hidden border-4 border-red-600 shadow-xl">
              <img 
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Treinamento personalizado" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};