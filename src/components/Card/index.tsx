import React from 'react'

import './style.scss'

interface CardProps {
  data: {
    img: string
    cod: string
    tipoN: string
    prec: number
    ende: string
    tam: number
    dorms: number
    suit: number
    wc: number
    vagas: number
    tipoI: string
  }
}

const Card: React.FC<CardProps> = ({ data }) => {
  const {
    img,
    cod,
    tipoN,
    prec,
    dorms,
    ende,
    suit,
    tam,
    vagas,
    wc,
    tipoI
  } = data

  return (
    <div className="Card">
      <img className="Card__img" src={img} alt="Imagem Imóvel" />
      <span className="Card__cod">{cod}</span>
      <span className="Card__neg">{tipoN}</span>
      <span className="Card__prec">R$ {prec}</span>
      <span className="fas fa-map-marker-alt Card__ende">{ende}</span>
      <div className="Info">
        <span className="Info__tam">{tam} m²</span>
        <span className="Info__dorms">{dorms}</span>
        <span className="Info__suite">{suit}</span>
        <span className="Info__wc">{wc}</span>
        <span className="Info__vagas">{vagas}</span>
      </div>
      <span className="TipoI">{tipoI}</span>
    </div>
  )
}

export default Card
