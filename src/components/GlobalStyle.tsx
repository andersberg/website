import { css, Global } from '@emotion/core'

const global = css`
  :root {
    --mint: #DFFAF1;
    --navy-80: #43577A;
    --navy-90: #2E456C;
    --navy: #1A335F;
  }

  @font-face {
    font-family: 'Cerebri Sans';
    src: 
      url('fonts/CerebriSans-Bold.ttf') format('truetype'),
      url('fonts/CerebriSans-Bold.woff') format('woff'),
      url('fonts/CerebriSans-Bold.woff2') format('woff2');
    font-weight: bold;
    font-display: auto;
    font-style: normal;
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