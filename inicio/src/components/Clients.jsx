import React from 'react'
import './Clients.css'

const Clients = () => {
  const clients = [
    { id: 1, image: '/assets/images/c3.jpg', alt: 'Cliente 1' },
    { id: 2, image: '/assets/images/c1.jpg', alt: 'Cliente 2' },
    { id: 3, image: '/assets/images/logo-3.jpg', alt: 'Cliente 3' },
    { id: 4, image: '/assets/images/312981651_434543642167610_7044122996053786744_n.jpg', alt: 'Cliente 4' },
    { id: 5, image: '/assets/images/logo-1.jpg', alt: 'Cliente 5' }
  ]

  return (
    <section className="clients">
      <div className="container">
        <h2 className="clients-title">Nuestros Clientes</h2>
        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client.id} className="client-logo">
              <img src={client.image} alt={client.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
