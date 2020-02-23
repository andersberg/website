import React from "react";
import styled from "@emotion/styled";

const Page = styled.main`
  display: grid;
  width: 100vw;
  height: 100vh;
  border: solid 1rem var(--navy);
  height: calc(var(--vh, 1vh) * 100);
  justify-content: center;
  align-content: center;
  grid-template-columns: 80%;

  @media (min-width: 768px) {
    grid-template-columns: minmax(auto, 820px);
  }

  @media all and (device-width: 768px) and (device-height: 1024px) and (orientation: portrait) {
    .foo {
      height: 1024px;
    }
  }

  /* iPad with landscape orientation. */
  @media all and (device-width: 768px) and (device-height: 1024px) and (orientation: landscape) {
    .foo {
      height: 768px;
    }
  }

  /* iPhone 5 
You can also target devices with aspect ratio. */
  @media screen and (device-aspect-ratio: 40/71) {
    .foo {
      height: 500px;
    }
  }
`;

export default Page;
