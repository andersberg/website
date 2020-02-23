import styled from '@emotion/styled'
import * as CSS from 'csstype'
import { ReactElement } from 'react'

type PictureProps = {
  alt?: string;
  size?: string;
  srcs?: string[];
  src: string;
}

const Picture = styled.picture<{size?: string;}>`
  width: ${props => props.size ? `${props.size}px` : '100%'};
  max-width: 100%;

  & > img {
    width: 100%;
  }
`
export default ({alt, size, src}: PictureProps): ReactElement => (
  <Picture size={size}>
    <img src={src} alt={alt ? alt : ''} />
  </Picture>
)