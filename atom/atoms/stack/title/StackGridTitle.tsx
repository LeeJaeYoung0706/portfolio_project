import styled from "styled-components";
import {kdamThmorPro} from "@/style/font";

const StackGridTitleStyle = styled.div`
  font-size: 4em;
  color: ${props => props.theme.palette.primary};
  width: 100%;
  text-align: center;
`
/**
 * Stack Grid Title View
 * @param title
 * @constructor
 */
export default function StackGridTitle({title} : {title: string}) {
    return (
        <StackGridTitleStyle>
            <h4 className={kdamThmorPro.className}>{title}</h4>
        </StackGridTitleStyle>
    )
}