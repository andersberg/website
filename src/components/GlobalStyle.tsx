import { css, Global } from '@emotion/core'

const global = css`
  :root {
    --mint: #DFFAF1;
    --navy-80: #43577A;
    --navy-90: #2E456C;
    --navy: #1A335F;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  html,
  body {
    background-color: var(--mint);
    color: var(--navy);
    font-family: 'Cerebri Sans';
  }
`

export default () => <Global styles={global} />