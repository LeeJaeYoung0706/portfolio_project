import React from "react";
import styled from "styled-components";

const AboutMeIdCardTitleFontStyle = styled.h3`
  font-size: 2.3em;
  padding-bottom: 3px;
  line-height: 1;
  color: ${(props => props.theme.palette.primary)};
  font-weight: bold;

  ${(props) => props.theme.media.tablet} {
    font-size: 2.2em;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 2.04em;
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