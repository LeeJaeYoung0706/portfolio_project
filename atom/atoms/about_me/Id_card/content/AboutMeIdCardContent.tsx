import React from "react";
import {NGodicFont} from "@/style/font";
import styled from "styled-components";
import {fontMiddleSizeMobile, fontMiddleSizePC, fontMiddleSizeTablet} from "@/style/theme/common";

const AboutMeIdCardContentStyle = styled.p`

  ${fontMiddleSizePC};
  color: ${(props => props.theme.palette.second)};
  background-color: transparent;
  padding-bottom: 50px;

  ${(props) => props.theme.media.tablet} {
    ${fontMiddleSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${fontMiddleSizeMobile};
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