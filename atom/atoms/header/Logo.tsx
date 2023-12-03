import {OrbitFont} from "@/style/font";
import styled, {css} from "styled-components";
import {useScrollPosition} from "@/lib/useScrollPosition";


export const LogoStyle = styled.div<{ $logoFontSize: string , $isTop: boolean , $checked: boolean }>`
  font-size: ${props => props.$logoFontSize};
  padding-left: 1.7vw;
  ${(props) => ( props.$isTop || props.$checked ) ? css`color: ${props.theme.palette.primary};` : css`color: transparent;` };
  background-color: transparent;
  line-height: 1;
 
  ${(props) => props.theme.media.tablet} {
    font-size: 3.4em;
    padding-left: 40px;
    background-color: transparent;
  }

  ${(props) => props.theme.media.mobile} {
    background-color: transparent;
    padding-left: 23px;
    font-size: 2.5em;
  }
`
/**
 * Logo
 * @param children
 * @constructor
 */
export default function Logo({logoText, logoFont, $logoFontSize , checked}: LogoPropsInterface) {
    const [isTop] = useScrollPosition();
    return (
        <LogoStyle
            $logoFontSize={$logoFontSize || '1rem'}
            $isTop={isTop}
            $checked={checked}
        >
            <h1 className={logoFont || OrbitFont.className}> {logoText} </h1>
        </LogoStyle>
    )
}