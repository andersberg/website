import 'sanitize.css';
import GlobalStyle from '../src/components/GlobalStyle'
import { Fragment } from 'react';
import Head from 'next/head'

function App ({ Component, pageProps}) {
  return (
    <Fragment>
      <Head>
        <title>andersberg.net</title>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16"></link>
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32"></link>
        <link rel="manifest" href="/manifest.webmanifest"></link>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png"></link>
        <link rel="shortcut icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png"></link>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App;