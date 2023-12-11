import styled from "styled-components";
import {HanSansFont, kdamThmorPro, NotoSansFont} from "@/style/font";

const StackGridTitleStyle = styled.p`
  font-size: 45px;
  color: ${props => props.theme.palette.second};
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
        <StackGridTitleStyle className={HanSansFont.className}>
           {title}
        </StackGridTitleStyle>
    )
}