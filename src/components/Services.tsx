
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Venda Direta",
      description: "Negocie a venda do seu terreno diretamente com incorporadores interessados, com valores de mercado atualizados.",
      icon: "💰",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Permuta por Unidades",
      description: "Troque seu terreno por unidades autônomas no empreendimento que será construído no local.",
      icon: "🏢",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Sociedade em Conta de Participação",
      description: "Forme parceria com incorporadores, contribuindo com terreno e/ou capital para participar dos lucros.",
      icon: "🤝",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Modalidades de Negociação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos diferentes formas de negociar seu terreno, sempre com assessoria jurídica especializada
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 group hover:transform hover:scale-105">
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
