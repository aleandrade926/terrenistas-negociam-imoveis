
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Pronto para Negociar seu Terreno?
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Entre em contato conosco e descubra as melhores oportunidades para seu terreno 
          com assessoria jurídica especializada.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Proprietários de Terreno</h3>
            <p className="text-green-100 text-sm mb-4">
              Cadastre seu terreno e receba propostas de incorporadores interessados
            </p>
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full">
              Cadastrar Terreno
            </button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Incorporadores</h3>
            <p className="text-green-100 text-sm mb-4">
              Encontre os melhores terrenos para seus projetos imobiliários
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full">
              Buscar Terrenos
            </button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="text-white">
            📧 contato@terrenistas.com.br
          </div>
          <div className="text-white">
            📱 (11) 99999-9999
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
