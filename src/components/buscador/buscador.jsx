import React from 'react'
import './Buscador.css';

const Buscador = () => {
  return (
    <form action="" className='cont-buscador'>
        <input type="text" placeholder='Buscar' className='buscador'/>
        <i className="bi bi-search lupa"></i>
    </form>
  )
}

export {Buscador}