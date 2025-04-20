import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

export const Questions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Qual o diferencial da Academia Negreiros?",
      answer: "A Academia Negreiros combina o melhor dos dois mundos: metodologia tradicional de treino com equipamentos de última geração da marca Romano, testados pelo Fernando Sardinha. Nossa abordagem única garante resultados reais e duradouros."
    },
    {
      question: "Preciso agendar uma avaliação física?",
      answer: "Sim, recomendamos que todos os novos alunos façam uma avaliação física. Este processo nos ajuda a criar um programa personalizado que atenda seus objetivos específicos e respeite suas limitações."
    },
    {
      question: "Quais são os horários de funcionamento?",
      answer: "A academia funciona de segunda a sexta das 6h às 22h, aos sábados das 8h às 16h, e não abrimos aos domingos. Nosso horário estendido permite que você treine no momento mais conveniente do seu dia."
    },
    {
      question: "Vocês oferecem acompanhamento nutricional?",
      answer: "Sim, oferecemos orientação nutricional básica em alguns de nossos planos. Para o plano semestral, incluímos um programa alimentar básico para complementar seu treino e maximizar seus resultados."
    },
    {
      question: "Como funciona o processo de matrícula?",
      answer: "O processo é simples e rápido. Você pode iniciar pelo WhatsApp ou presencialmente. Precisamos de um documento com foto, comprovante de residência e atestado médico. Oferecemos diferentes planos para você escolher o que melhor se adequa às suas necessidades."
    },
    {
      question: "Os professores são qualificados?",
      answer: "Todos os nossos professores são graduados em Educação Física e passam por treinamento específico sobre nossa metodologia. Eles são especialistas em prescrição de treinos e acompanhamento personalizado."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-20 bg-neutral-900">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-red-600 after:mx-auto after:mt-4">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Tire suas dúvidas sobre a Academia Negreiros e nossos serviços.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full text-left bg-neutral-800 p-5 md:p-6 hover:bg-neutral-700 transition-all duration-200 flex justify-between items-center gap-4 ${
                  openIndex === index ? 'rounded-b-none' : ''
                }`}
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className="font-bold text-base md:text-lg text-white text-left">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0" />
                )}
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-neutral-800"
                  >
                    <div className="p-5 md:p-6 pt-0 text-gray-300 text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10 md:mt-12"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <motion.a
            href="https://api.whatsapp.com/send/?phone=5583993444653&text=Ol%C3%A1%2C+tenho+algumas+d%C3%BAvidas+sobre+a+Academia+Negreiros%21&type=phone_number&app_absent=0"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg shadow-lg hover:shadow-red-600/20"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Fale Conosco
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};