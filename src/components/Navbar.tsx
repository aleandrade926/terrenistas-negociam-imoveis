
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Terrenistas
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Início
              </a>
              <a href="#services" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Serviços
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Como Funciona
              </a>
              <a href="#about" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Sobre
              </a>
              <a href="#contact" className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:shadow-lg transition-all">
                Contato
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#home" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">
              Início
            </a>
            <a href="#services" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">
              Serviços
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">
              Como Funciona
            </a>
            <a href="#about" className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">
              Sobre
            </a>
            <a href="#contact" className="bg-gradient-to-r from-green-600 to-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium">
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
