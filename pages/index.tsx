
import React, { useState, useLayoutEffect } from 'react'
import Page from '../src/components/Page'
import Picture from '../src/elements/Picture'
import styled from '@emotion/styled'

const Heading = styled.h1`
  text-align: center;
`

const setWindowHeightProperty = () => {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
const vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
}

const Home = () => {

  useLayoutEffect(() => {
     if (!!window) {
      setWindowHeightProperty()
      window.addEventListener('resize', () => setWindowHeightProperty())
    }

    return () => {
      window.removeEventListener('resize', () => setWindowHeightProperty())
    }
  }, [])
  

  return (
    <Page >
      <Picture size={'80vw'} src={"imgs/Mountains.png"} alt="Mountians logo" />
      <Heading >andersberg.net</Heading>
    </Page>
  )
}

export default Home
