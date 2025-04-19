import React from 'react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          filter: "brightness(0.3)"
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-black/70 z-10"></div>
      
      <div className="container-custom relative z-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
          <span className="text-[var(--color-light)]">ACADEMIA</span>{' '}
          <span className="text-[var(--color-primary)]">NEGREIROS</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-[var(--color-foreground)]">
          Onde o treinamento raiz encontra equipamentos de última geração
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#planos" 
            className="btn-primary bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-[var(--color-light)] font-bold py-3 px-6 rounded-md transition duration-300 inline-block"
          >
            Conheça Nossos Planos
          </a>
          <a 
            href="https://api.whatsapp.com/send/?phone=5583993444653&text=Ol%C3%A1%2C+quero+me+matricular+na+academia+mais+individualizada+da+regi%C3%A3o%21&type=phone_number&app_absent=0"
            className="bg-[var(--color-bg)] hover:bg-[var(--color-hover-dark)] text-[var(--color-light)] font-bold py-3 px-6 rounded-md transition duration-300 inline-block border border-[var(--color-primary)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale Conosco
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer">
        <svg className="w-6 h-6 text-[var(--color-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
