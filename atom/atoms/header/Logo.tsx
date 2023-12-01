import {OrbitFont} from "@/style/font";
import styled from "styled-components";
import {useScrollPosition} from "@/lib/useScrollPosition";


export const LogoStyle = styled.div<{ $logoFontSize: string , $isTop: boolean }>`
  font-size: ${props => props.$logoFontSize};
  padding-left: 1.7vw;
  color: ${(props) => props.$isTop ? props.theme.palette.primary : props.theme.palette.second};
  background-color: transparent;
  line-height: 1;
 
  ${(props) => props.theme.media.tablet} {
    font-size: 60px;
    padding-left: 40px;
    background-color: transparent;
  }

  ${(props) => props.theme.media.mobile} {
    background-color: transparent;
    padding-left: 15px;
    font-size: 30px;
  }
`
/**
 * Logo
 * @param children
 * @constructor
 */
export default function Logo({logoText, logoFont, $logoFontSize}: LogoPropsInterface) {
    const [isTop] = useScrollPosition();
    return (
        <LogoStyle
            $logoFontSize={$logoFontSize || '1rem'}
            $isTop={isTop}
        >
            <h1 className={logoFont || OrbitFont.className}> {logoText} </h1>
        </LogoStyle>
    )
}