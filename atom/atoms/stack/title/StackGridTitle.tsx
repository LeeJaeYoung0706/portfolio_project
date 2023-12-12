import styled from "styled-components";
import {HanSansFont, kdamThmorPro, NotoSansFont, RussoFont} from "@/style/font";

const StackGridTitleStyle = styled.p`
    z-index: 100;
    font-size: 45px;
    color: ${props => props.theme.palette.middle};
    width: 100%;
    text-align: center;
    font-weight: bold;
`
/**
 * Stack Grid Title View
 * @param title String title
 * @constructor
 */
export default function StackGridTitle({title} : StackGridTitlePropsInterface) {
    return (
        <StackGridTitleStyle className={RussoFont.className}>
           {title}
        </StackGridTitleStyle>
    )
}