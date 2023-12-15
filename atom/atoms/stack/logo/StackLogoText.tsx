import React from "react";
import styled from "styled-components";
import {NGodicFont, TitllFont} from "@/style/font";
import {
  MiddleTitleFontSizeMobile,
  MiddleTitleFontSizePC, MiddleTitleFontSizeTablet
} from "@/style/theme/common";

export const StackLogoTextStyle = styled.h5`
  color: ${props => props.theme.palette.primary70};
  line-height: 1;
  font-weight: bold;
  ${MiddleTitleFontSizePC};

  ${(props) => props.theme.media.tablet} {
    ${MiddleTitleFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${MiddleTitleFontSizeMobile};
  }
`

/**
 * Stack Logo Title
 * @param text Text
 * @constructor
 */
function StackLogoText({text}: StackLogoTextPropsInterface): React.JSX.Element {
  return (
    <StackLogoTextStyle className={NGodicFont.className}>{text}</StackLogoTextStyle>
  )
}

export default React.memo(StackLogoText)