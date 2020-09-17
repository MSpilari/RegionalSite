import React from 'react'
import Link from 'next/link'
import DefaultLayout from '../components/DefaultLayout'

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <h1>Home Page</h1>
      <Link href="about">
        <button>To About</button>
      </Link>
    </DefaultLayout>
  )
}

export default Home
