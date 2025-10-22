import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'ELEVA TUS VENTAS',
      description: 'Impulsamos tus ventas a través de estrategias personalizadas y efectivas.',
      image: '/assets/images/como-aumentar-mis-ventas-tip-1.webp',
      link: 'https://wa.link/k13h98'
    },
    {
      id: 2,
      title: 'GESTIONAR REDES SOCIALES',
      description: 'Conéctate con estilo. 🚀 Explora nuestra marca. #Innovación #Tendencia',
      image: '/assets/images/rrrss-pymes.jpg',
      link: 'https://wa.link/k13h98'
    },
    {
      id: 3,
      title: 'DESARROLLO DE PAGINA WEB',
      description: 'Diseño web profesional que destaca. Impacta desde el primer clic. ¡Construyamos tu sitio perfecto!',
      image: '/assets/images/partes-de-una-pagina-web.png',
      link: 'https://wa.link/k13h98'
    }
  ]

  return (
    <section className="services" id="servicios">
      <div className="container">
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <a href={service.link} target="_blank" rel="noopener noreferrer">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
