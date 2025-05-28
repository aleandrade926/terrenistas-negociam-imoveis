
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Assessoria Jurídica Especializada
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Como advogado e corretor de imóveis, ofereço assessoria completa em todas as etapas 
              da negociação. Experiência em direito imobiliário e conhecimento profundo do mercado 
              garantem segurança jurídica em seus investimentos.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Análise Jurídica Completa</h4>
                  <p className="text-gray-600">Verificação de documentação e situação legal do imóvel</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Estruturação de Contratos</h4>
                  <p className="text-gray-600">Elaboração de contratos seguros para todas as modalidades</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Acompanhamento até o Registro</h4>
                  <p className="text-gray-600">Suporte completo desde a negociação até a escrituração</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Sua Segurança é Nossa Prioridade</h3>
              <p className="text-green-100 mb-6">
                Cada negociação é acompanhada por profissionais qualificados, garantindo 
                transparência e legalidade em todo o processo.
              </p>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-sm text-green-100 mb-1">OAB/SP - Advogado</div>
                <div className="text-sm text-green-100">CRECI/SP - Corretor de Imóveis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
