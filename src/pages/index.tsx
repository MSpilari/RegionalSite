import React from 'react'
import Card from '../components/Card'
import Container from '../components/Container'

import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import ExampleImg from '../assets/example.jpg'

const Home: React.FC = () => {
  const data = {
    img: ExampleImg,
    cod: '01234',
    tipoN: 'Locação',
    prec: 2185,
    ende: 'São Caetano do Sul, Santa Paula, SP',
    tam: 150,
    dorms: 3,
    suit: 1,
    wc: 3,
    vagas: 1,
    tipoI: 'Apartamento'
  }

  return (
    <>
      <Header />
      <SearchBox />
      <Container
        title={'Imóveis para Alugar'}
        desc={
          'Alugue de forma prática e se mude em poucos dias. Sua casa pode estar mais perto do que você imagina.'
        }
      >
        <Card data={data} />
      </Container>
    </>
  )
}

export default Home
