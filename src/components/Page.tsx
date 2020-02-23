import React from 'react'
import styled from '@emotion/styled'

const Page = styled.main`
  display: grid;
  width: 100vw;
  height: 100vh;
  border: solid 1rem var(--navy);
  justify-content: center;
  align-content: center;
  grid-template-columns: 80%;
  
  @media (min-width: 768px) {
    grid-template-columns: minmax(auto, 820px);
  }
`

export default Page;