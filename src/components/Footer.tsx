
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Terrenistas
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              A plataforma que conecta proprietários de terrenos com incorporadores imobiliários, 
              facilitando negociações seguras e transparentes.
            </p>
            <div className="text-gray-400 text-sm">
              <p>Assessoria Jurídica Especializada</p>
              <p>OAB/SP • CRECI/SP</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-green-400 transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Serviços</a></li>
              <li><a href="#how-it-works" className="hover:text-green-400 transition-colors">Como Funciona</a></li>
              <li><a href="#about" className="hover:text-green-400 transition-colors">Sobre</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contato@terrenistas.com.br</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Terrenistas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
