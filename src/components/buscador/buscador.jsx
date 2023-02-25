import React from 'react'
import './buscador.css';

const buscador = () => {
  return (
    <form action="" className='cont-buscador'>
        <input type="text" placeholder='Buscar' className='buscador'/>
        <i className="bi bi-search lupa"></i>
    </form>
  )
}

export {buscador}