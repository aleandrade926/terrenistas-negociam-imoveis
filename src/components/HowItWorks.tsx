
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Cadastre seu Terreno",
      description: "Registre as informações do seu terreno com documentação e fotos. Nossa equipe faz a análise técnica."
    },
    {
      number: "02", 
      title: "Matching Inteligente",
      description: "Nosso algoritmo conecta seu terreno com incorporadores interessados na região e tipo de projeto."
    },
    {
      number: "03",
      title: "Negociação Assistida",
      description: "Facilitamos as tratativas entre as partes com propostas transparentes e assessoria especializada."
    },
    {
      number: "04",
      title: "Fechamento Seguro",
      description: "Acompanhamento jurídico completo para garantir segurança e legalidade em todo o processo."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo simples e seguro para conectar proprietários e incorporadores
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-4 z-10">
                    <ArrowRight className="h-8 w-8 text-green-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
