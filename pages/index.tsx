
import React from 'react'
import Page from '../src/components/Page'
import Picture from '../src/elements/Picture'
import styled from '@emotion/styled'

const Heading = styled.h1`
  text-align: center;
`

const Home = () => (
  <Page >
    <Picture size={'80vw'} src={"imgs/Mountains.png"} alt="Mountians logo" />
    <Heading >andersberg.net</Heading>
  </Page>
)

export default Home
