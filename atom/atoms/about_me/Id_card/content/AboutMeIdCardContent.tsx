import React from "react";
import {NGodicFont} from "@/style/font";
import styled from "styled-components";

const AboutMeIdCardContentStyle = styled.p`
 
  font-size: 2.0em;
  color: ${(props => props.theme.palette.second)};
  background-color: transparent;
  padding-bottom: 50px;

  ${(props) => props.theme.media.tablet} {
    font-size: 1.8em;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 1.6em;
  }
  
  & a:hover {
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: ${(props) => props.theme.palette.reverseSecond};
      }
    }
  }

  & a:active {
    color: ${(props) => props.theme.palette.reverseSecond};
    opacity: 0.9; 
  }
`

/**
 * About Me 내용 부분
 * @param content
 * @constructor
 */
function AboutMeIdCardContent({content} : {content: string}) : React.JSX.Element {
    return (
        <AboutMeIdCardContentStyle className={NGodicFont.className} dangerouslySetInnerHTML={{ __html: content}} />
    )
}

export default React.memo(AboutMeIdCardContent)