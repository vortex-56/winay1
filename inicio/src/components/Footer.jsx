import React, { useState } from 'react'
import './Footer.css'

const Footer = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    celular: '',
    email: '',
    negocio: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    alert('¡Gracias por contactarnos! Pronto nos comunicaremos contigo.')
  }

  return (
    <footer className="footer" id="contacto">
      <div className="container">
        <div className="footer-content">
          <div className="contact-section">
            <h3>AGENDA UNA REUNIÓN</h3>
            <p>Completa el formulario y obtén una consultoría. ¡Estás a un paso del éxito!</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-column">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="celular"
                    placeholder="Celular"
                    value={formData.celular}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="negocio"
                    placeholder="Rubro de negocio"
                    value={formData.negocio}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-column">
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="mensaje"
                    placeholder="Cuéntanos sobre tu proyecto"
                    rows="10"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-submit">
                <button type="submit" className="btn btn-primary">
                  ¡COMENZAR EL CAMBIO!
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Wiñay Agency. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
