import React from 'react'
import './Features.css'

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'GESTIÓN DE CAMPAÑAS AVANZADAS (Ads)',
      image: '/assets/images/cu1.jpg',
      link: 'https://wa.link/k13h98'
    },
    {
      id: 2,
      title: 'DESARROLLO WEB',
      image: '/assets/images/cu2.jpg',
      link: 'https://wa.link/k13h98'
    },
    {
      id: 3,
      title: 'CHATBOT INTEGRADO CON IA',
      image: '/assets/images/cu3.jpg',
      link: 'https://wa.link/k13h98'
    }
  ]

  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <a href={feature.link} target="_blank" rel="noopener noreferrer">
                <div className="feature-image">
                  <img src={feature.image} alt={feature.title} />
                </div>
                <div className="feature-title">
                  <p>{feature.title}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
