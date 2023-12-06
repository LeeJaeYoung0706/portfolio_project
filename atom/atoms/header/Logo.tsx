import {NotoSansFont} from "@/style/font";
import styled, {css} from "styled-components";
import {useScrollPosition} from "@/lib/useScrollPosition";


export const LogoStyle = styled.div<{ $logoFontSize: string , $isTop: boolean , $checked: boolean }>`
  font-size: ${props => props.$logoFontSize};
  padding-left: 40px;
  ${(props) => ( props.$isTop || props.$checked ) ? css`color: ${props.theme.palette.primary};` : css`color: transparent;` };
  background-color: transparent;
  line-height: 1;
 
  ${(props) => props.theme.media.tablet} {
    font-size: 45px;
    padding-left: 40px;
    background-color: transparent;
  }

  ${(props) => props.theme.media.mobile} {
    background-color: transparent;
    padding-left: 23px;
    font-size: 40px
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
            $logoFontSize={$logoFontSize || '57px'}
            $isTop={isTop}
            $checked={checked}
        >
            <h1 className={logoFont || NotoSansFont.className}> {logoText} </h1>
        </LogoStyle>
    )
}