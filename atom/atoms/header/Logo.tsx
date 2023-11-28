import {EnKdam} from "@/style/font";
import styled from "styled-components";


export const LogoStyle = styled.div<{ $logoFontSize: string }>`
  font-size: ${props => props.$logoFontSize};
  padding-left: 1.7vw;
  color: ${props => props.theme.palette.fontColorHover};
  //text-shadow: ${props => props.theme.palette.boxShadow};
  background-color: transparent;
 
  ${(props) => props.theme.media.tablet} {
    //font-size: 2.7em;
    font-size: 40px;
    padding-left: 15px;
    background-color: transparent;
  }

  ${(props) => props.theme.media.mobile} {
    background-color: transparent;
    padding-left: 15px;
    font-size: 35px;
    //font-size: 1.8em;
  }
`

export default function Logo({logoText, logoFont, $logoFontSize}: LogoPropsInterface) {
    return (
        <LogoStyle
            $logoFontSize={$logoFontSize || '1rem'}
        >
            <h1 className={logoFont || EnKdam.className}> {logoText} </h1>
        </LogoStyle>
    )
}