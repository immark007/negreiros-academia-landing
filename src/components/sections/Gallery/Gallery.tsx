import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from '../../../assets/gallery/img1.jpg';
import img2 from '../../../assets/gallery/img2.jpg';
import img3 from '../../../assets/gallery/img3.jpg';

export const Gallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const galleryImages = [
    {
      url: img1,
      alt: "Equipamentos de musculação"
    },
    {
      url: img2,
      alt: "Treino funcional"
    },
    {
      url: img3,
      alt: "Área de peso livre"
    },
    {
      url: "https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Espaço interno"
    },
    {
      url: "https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Equipamento de treino"
    },
    {
      url: "https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Treino personalizado"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-neutral-800">
      <div className="container-custom">
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            NOSSA <span className="text-red-500">ESTRUTURA</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Conheça o ambiente da Academia Negreiros através das imagens do nosso espaço e equipamentos.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="relative flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4"
                >
                  <div className="relative pt-[75%] overflow-hidden rounded-lg group">
                    <img 
                      src={image.url} 
                      alt={image.alt} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600 p-3 rounded-full text-white shadow-lg hover:bg-red-700 transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600 p-3 rounded-full text-white shadow-lg hover:bg-red-700 transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};