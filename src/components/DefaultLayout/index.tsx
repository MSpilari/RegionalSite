import React from 'react'
import Head from 'next/head'

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Regional Imóveis</title>
      </Head>
      {children}
    </>
  )
}

export default DefaultLayout
