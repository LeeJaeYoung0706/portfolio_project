import React from "react";
import styled from "styled-components";
import {fontMiddleSizeMobile, fontMiddleSizePC, fontMiddleSizeTablet} from "@/style/theme/common";

const AboutMeIdCardTitleFontStyle = styled.h3`
  ${fontMiddleSizePC};
  padding-bottom: 3px;
  line-height: 1;
  color: ${(props => props.theme.palette.primary)};
  font-weight: bold;

  ${(props) => props.theme.media.tablet} {
    ${fontMiddleSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${fontMiddleSizeMobile};
  }
}
`

/**
 * About Me Id Card Title
 * @param font
 * @param title
 * @constructor
 */
function AboutMeIdCardTitle ( {font , title} : {font: string , title: string}) :React.JSX.Element {
    return (
        <AboutMeIdCardTitleFontStyle className={font}>
            {title}
        </AboutMeIdCardTitleFontStyle>
    )
}

export default React.memo(AboutMeIdCardTitle)