/* Remember that everytime you make changes at this file, ALWAYS restart the server with CTRL+C or refresh the page(F5)
If you want a Dynamic Head it's better creatinga a component exclusive for that. */
import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import '../global.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Regional Imóveis</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
