import React from 'react';
import styled from "styled-components";
import {color} from "@/style/theme/color";

const AboutMeLayoutStyle = styled.section`
  background-color: ${props => props.theme.palette.reverse};
  margin: 0 auto;
  max-width: 1500px;

  ${(props) => props.theme.media.tablet} {
    min-width: 600px;
    max-width: 700px;
  }

  ${(props) => props.theme.media.mobile} {
    min-width: 360px;
    max-width: 370px;
  }
`

/**
 * AboutMe View
 * @param children
 * @constructor
 */
function AboutMeView({children}: AboutMeInterface): React.JSX.Element {
  return (
    <AboutMeLayoutStyle>
      {children}
    </AboutMeLayoutStyle>
  )
}

export default React.memo(AboutMeView)