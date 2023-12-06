import React from "react";
import styled from "styled-components";
import {NGodicFont, TitllFont} from "@/style/font";
import {fontMiddleSizeMobile, fontMiddleSizePC, fontMiddleSizeTablet} from "@/style/theme/common";

const StackLogoTextStyle = styled.h5`
  color: ${props => props.theme.palette.primary};
  line-height: 1;
  font-weight: bold;
  ${fontMiddleSizePC};
  ${(props) => props.theme.media.tablet} {
    ${fontMiddleSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${fontMiddleSizeMobile};
  }
`
/**
 * Stack Logo Title
 * @param children
 * @constructor
 */
function StackLogoText({text}: { text: string }): React.JSX.Element {
    return (
        <StackLogoTextStyle className={NGodicFont.className}>{text}</StackLogoTextStyle>
    )
}

export default React.memo(StackLogoText)