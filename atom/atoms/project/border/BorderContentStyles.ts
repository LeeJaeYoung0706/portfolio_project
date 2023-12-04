import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";


export const BorderContentUlStyle = styled.ul`
    list-style: inside;  
`;

export const BorderStackLayoutStyle = styled.div`
  ${displayFlex('row' , 'flex-start' , 'center' , 'flex' , true)};
  align-content: flex-start;
  gap: 10px;
  padding-bottom: 50px;
  ${(props) => props.theme.media.tablet} {
    width: 100%;
    min-height: 550px;
  }
`