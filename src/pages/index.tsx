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
  const dataBlog = {
    imgBlog: ExampleImg,
    title: 'Lar Doce Lar: Os desafios do Home Office',
    desc:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos iure delectus, qui sed possimus vero pariatur eius nihil nobis dolorem ut minima temporibus asperiores accusantium, aliquid est, quaerat beatae sit.'
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
      <Container title={'Destaques'} isSpot>
        <Card data={data} />
      </Container>
      <Container
        title={'Imóveis para Venda'}
        desc={
          'O sonho da casa própria está mais próximo do que você imagina. Conheça nossos imóveis à venda e agende uma visita com um corretor.'
        }
      >
        <Card data={data} />
      </Container>
      <Container title={'Blog'}>
        <Card dataBlog={dataBlog} />
      </Container>
    </>
  )
}

export default Home
