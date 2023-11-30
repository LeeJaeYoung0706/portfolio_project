import React from "react";
import styled from "styled-components";
import {OrbitFont} from "@/style/font";

const StackLogoTextStyle = styled.h5`
  color: ${props => props.theme.palette.second};
  line-height: 1;
  text-align: right;
  font-size: 2em;
`

function StackLogoText({text}: { text: string }): React.JSX.Element {
    return (
        <StackLogoTextStyle className={OrbitFont.className}>{text}</StackLogoTextStyle>
    )
}

export default React.memo(StackLogoText)