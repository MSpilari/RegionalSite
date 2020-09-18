import React from 'react'
import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="about">
        <button>To About</button>
      </Link>
    </>
  )
}

export default Home
