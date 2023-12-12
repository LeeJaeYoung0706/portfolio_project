import React from "react";
import {HanSansFont, NGodicFont, NotoSansFont} from "@/style/font";
import styled from "styled-components";
import {fontMiddleSizeMobile, fontMiddleSizePC, fontMiddleSizeTablet} from "@/style/theme/common";

const AboutMeIdCardContentStyle = styled.p`
  ${fontMiddleSizePC};

  color: ${(props => props.theme.palette.primary)};
  ${(props) => props.theme.media.tablet} {
    ${fontMiddleSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${fontMiddleSizeMobile};
  }
  & a:hover {
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: ${(props) => props.theme.palette.middle};
      }
    }
  }
  & a:active {
    color: ${(props) => props.theme.palette.middle};
    opacity: 0.9; 
  }
`


/**
 * About Me 내용 부분
 * @param content => 내용 html 요소로 보냅니다.
 * @constructor
 */
function AboutMeIdCardContent({content} : AboutMeIdCardContentPropsInterface) : React.JSX.Element {
    return (
        <AboutMeIdCardContentStyle className={NGodicFont.className} dangerouslySetInnerHTML={{ __html: content}} />
    )
}

export default React.memo(AboutMeIdCardContent)