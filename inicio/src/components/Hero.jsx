import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-subtitle">Agencia de Marketing Digital Perú</p>
            <h1 className="hero-title">
              Tus aliados en{' '}
              <strong className="text-gradient">marketing digital</strong> y{' '}
              <strong className="text-gradient">desarrollo web</strong>
            </h1>
            <div className="hero-cta">
              <a href="#contacto" className="btn btn-primary">
                Comenzar ahora
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="/assets/images/celulares-1.png" 
              alt="Dispositivos móviles mostrando diseño web" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
