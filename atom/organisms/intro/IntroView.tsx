import React from "react";
import styled from "styled-components";
import {kdamThmorPro} from "@/style/font";
import {color} from "@/style/theme/color";



const IntroLayoutStyle = styled.section`
  background-color: ${(props) => color.white};
  padding-bottom: 32vh;

  ${(props) => props.theme.media.tablet} {
    padding-bottom: 32vh;
  }

  ${(props) => props.theme.media.mobile} {
    padding-top: 30vh;
    padding-bottom: 30vh;
  }
`

/**
 * Intro View
 * @param children
 * @constructor
 */
function IntroView({children}: IntroInterface): React.JSX.Element {
    return (
        <IntroLayoutStyle className={kdamThmorPro.className}>
            {children}
        </IntroLayoutStyle>
    )
}

export default React.memo(IntroView)