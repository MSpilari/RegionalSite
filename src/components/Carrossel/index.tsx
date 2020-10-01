import React from 'react'

import Button from '../Button'
import Card from '../Card'

import './style.scss'

interface CarouselProps {
  allData?: {
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
  }[] // Quando vários objetos encontram-se dentro de um array usa-se esta forma. A outra [{}] indicaria apenas UM objeto dentro do array
  dataBlog?: {
    imgBlog: string
    title: string
    desc: string
  }[]
}

const Carousel: React.FC<CarouselProps> = ({ allData = [], dataBlog = [] }) => {
  const scrolling = event => {
    const { name, parentNode } = event.target
    const carousel = parentNode.firstChild
    return name === 'Rigth'
      ? carousel.scrollBy(200, 0)
      : carousel.scrollBy(-200, 0)
  }

  return (
    <div className="Carrossel">
      <ul className="Carrossel__wrapper">
        {allData.length > 0 &&
          allData.map(house => {
            return (
              <li key={house.cod} className="Carrossel__item">
                <Card data={house} />
              </li>
            )
          })}
        {dataBlog.length > 0 &&
          dataBlog.map((posts, index) => {
            return (
              <li key={index} className="Carrossel__item">
                <Card dataBlog={posts} />
              </li>
            )
          })}
      </ul>
      <Button onClick={e => scrolling(e)} name="Left" label="<" />
      <Button onClick={e => scrolling(e)} name="Rigth" label=">" />
    </div>
  )
}

export default Carousel
