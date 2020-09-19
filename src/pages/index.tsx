import React from 'react'
import Link from 'next/link'

import Header from '../components/Header'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <h1>Home Page</h1>
      <Link href="about">
        <button>To About</button>
      </Link>
    </>
  )
}

export default Home
