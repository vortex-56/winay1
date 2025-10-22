import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <h2>Wiñay <span className="text-gradient">Agency</span></h2>
          </div>
          <ul className="nav-menu">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
          <div className="nav-cta">
            <a href="https://wa.link/k13h98" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Contáctanos
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
