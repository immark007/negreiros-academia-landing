import { Button } from '../../common/Button';

export const About = () => {
  return (
    <section 
      id="sobre" 
      className="py-16 md:py-24 bg-neutral-900 px-5 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 
              id="about-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              NOSSA <span className="text-red-500">HISTÓRIA</span>
            </h2>
            
            <div className="space-y-5">
              <p className="text-gray-300 text-lg leading-relaxed">
                A Academia Negreiros tem um legado de dedicação e paixão pelo treinamento de qualidade. Fundada por Nino Negreiros, 
                a academia se tornou um símbolo de treinamento autêntico e resultados reais na região.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Após sua heroica luta contra uma doença, Nino Negreiros deixou seu legado para seu filho, Italo Negreiros. 
                Comprometido com os valores e princípios estabelecidos por seu pai, Italo implementou melhorias significativas 
                mantendo a essência que sempre caracterizou a Academia Negreiros.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Hoje, a Academia Negreiros representa o equilíbrio perfeito entre o respeito pela tradição do "treino raiz" 
                e a inovação tecnológica, oferecendo equipamentos de última geração da renomada marca Romano, todos testados 
                pelo próprio Fernando Sardinha.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                href="#equipamentos" 
                variant="primary"
                className="group hover:bg-red-600 transition-colors duration-300"
              >
                Conheça Nosso Espaço
              </Button>
            </div>
          </div>

          {/* Images */}
          <div className="relative order-1 md:order-2">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg" 
                alt="Interior da Academia Negreiros mostrando equipamentos modernos" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-1/2 aspect-square rounded-xl overflow-hidden border-4 border-red-500 shadow-xl z-10">
              <img 
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg" 
                alt="Treinamento personalizado na Academia Negreiros" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Decorative element */}
            <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 bg-red-500/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};