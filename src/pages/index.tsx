import React from 'react'
import Container from '../components/Container'

import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import Form from '../components/Form'
import Footer from '../components/Footer'
import Carrossel from '../components/Carrossel'

import Data from '../data/data.json'

const Home: React.FC = () => {
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
        <Carrossel allData={Data.data} />
      </Container>

      <Container title={'Destaques'} isSpot>
        <Carrossel allData={Data.data} />
      </Container>

      <Container
        title={'Imóveis para Venda'}
        desc={
          'O sonho da casa própria está mais próximo do que você imagina. Conheça nossos imóveis à venda e agende uma visita com um corretor.'
        }
      >
        <Carrossel allData={Data.data} />
      </Container>

      <Container title={'Blog'}>
        <Carrossel dataBlog={Data.dataBlog} />
      </Container>

      <Form />
      <Footer />
    </>
  )
}

export default Home
