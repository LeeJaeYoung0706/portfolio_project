import React from "react";
import styled from "styled-components";
import {OrbitFont, TitllFont} from "@/style/font";

const StackLogoTextStyle = styled.h5`
  color: ${props => props.theme.palette.second};
  line-height: 1;
  text-align: right;
  font-size: 2em;
`
/**
 * Stack Logo Title
 * @param children
 * @constructor
 */
function StackLogoText({text}: { text: string }): React.JSX.Element {
    return (
        <StackLogoTextStyle className={TitllFont.className}>{text}</StackLogoTextStyle>
    )
}

export default React.memo(StackLogoText)