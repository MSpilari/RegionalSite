import React from 'react'
import Button from '../Button'

import './style.scss'

interface CardProps {
  data?: {
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
  dataBlog?: {
    imgBlog: string
    title: string
    desc: string
  }
}

const Card: React.FC<CardProps> = ({ data = {}, dataBlog = {} }) => {
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

  const { imgBlog, title, desc } = dataBlog

  return (
    <div className="Card">
      {Object.keys(data).length !== 0 && (
        <>
          <img className="Card__img" src={img} alt="Imagem Imóvel" />
          <span className="Card__cod">{cod}</span>
          <span className="Card__neg">{tipoN}</span>
          <span className="Card__prec">R$ {prec}</span>
          <span className="Card__ende">
            <i className="fas fa-map-marker-alt"></i>
            {ende}
          </span>

          <div className="Info">
            <span className="Info__tam">{tam} m²</span>
            <span className="Info__dorms">
              <i className="fas fa-bed"></i>
              {dorms}
            </span>
            <span className="Info__suite">
              <i className="fas fa-th-large"></i>
              {suit}
            </span>
            <span className="Info__wc">
              <i className="fas fa-bath"></i>
              {wc}
            </span>
            <span className="Info__vagas">
              <i className="fas fa-car-side"></i>
              {vagas}
            </span>
          </div>
          <span className="TipoI">{tipoI}</span>
        </>
      )}
      {Object.keys(dataBlog).length !== 0 && (
        <>
          <img className="Card__img" src={imgBlog} alt="Imagem Blog" />
          <h1 className="Card__titleBlog">{title}</h1>
          <h5 className="Card__descBlog">{desc}</h5>
          <Button label={'Ver Artigo'} />
        </>
      )}
    </div>
  )
}

export default Card
