import {NotoSansFont, RussoFont} from "@/style/font";
import styled, {css} from "styled-components";
import {useScrollPosition} from "@/lib/useScrollPosition";


export const LogoStyle = styled.div<{ $logoFontSize: string , $isTop: boolean , $checked: boolean }>`
  font-size: ${props => props.$logoFontSize};
  padding-left: 40px;
  ${(props) => ( props.$isTop || props.$checked ) ? css`color: ${props.theme.palette.primary};` : css`color: transparent;` };
  background-color: transparent;
  line-height: 1;
  & > h1 {
    font-weight: bold;
  }
  ${(props) => props.theme.media.tablet} {
    font-size: 40px;
    padding-left: 40px;
    background-color: transparent;
  }

  ${(props) => props.theme.media.mobile} {
    background-color: transparent;
    padding-left: 23px;
    font-size: 32px
  }
`

/**
 * Logo
 * @param logoText 로고 노출 텍스트
 * @param logoFont 로고 텍스트 폰트 ClassName String
 * @param $logoFontSize 로고 Font Size
 * @param checked 노출 여부
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
            <h1 className={logoFont || RussoFont.className}> {logoText} </h1>
        </LogoStyle>
    )
}