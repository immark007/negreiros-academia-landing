import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

import img1 from '../../../assets/gallery/img1.jpg';
import img2 from '../../../assets/gallery/img2.jpg';
import img3 from '../../../assets/gallery/img3.jpg';

interface GalleryImage {
  src: string;
  alt: string;
}

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      src: img1,
      alt: "Equipamentos de musculação de última geração"
    },
    {
      src: img2,
      alt: "Área de treino funcional e aeróbico"
    },
    {
      src: img3,
      alt: "Espaço interno climatizado e moderno"
    },
    {
      src: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
      alt: "Treino personalizado com acompanhamento"
    },
    {
      src: "https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg",
      alt: "Equipamentos profissionais"
    },
    {
      src: "https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg",
      alt: "Área de peso livre completa"
    }
  ];

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <section id="galeria" className="py-16 md:py-20 bg-neutral-800">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            NOSSA <span className="text-red-500">ESTRUTURA</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Conheça o ambiente da Academia Negreiros através das imagens do nosso espaço e equipamentos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={`gallery-image-${index}`}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openModal(image)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openModal(image)}
              aria-label={`Ver imagem ampliada: ${image.alt}`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm md:text-base font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button 
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              onClick={closeModal}
              aria-label="Fechar modal"
            >
              <X size={24} />
            </button>
            <div className="relative max-w-4xl w-full">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] md:max-h-[80vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
                id="modal-title"
              />
              <p className="text-white text-center mt-4 text-sm md:text-base">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};