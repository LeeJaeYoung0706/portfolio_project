import React from "react";
import styled from "styled-components";
import {MiddleTitleFontSizeMobile, MiddleTitleFontSizePC, MiddleTitleFontSizeTablet} from "@/style/theme/common";


const AboutMeIdCardTitleFontStyle = styled.h3`
  ${MiddleTitleFontSizePC};
  line-height: 1;
  color: ${(props => props.theme.palette.middle)};
  min-width: 100px;

  ${(props) => props.theme.media.tablet} {
    ${MiddleTitleFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${MiddleTitleFontSizeMobile};
  }

}
`

/**
 * About Me Id Card Title
 * @param font => font ClassName => String
 * @param title => 타이틀 명
 * @constructor
 */
function AboutMeIdCardTitleView({font, title}: AboutMeIdCardTitlePropsInterface): React.JSX.Element {
  return (
    <AboutMeIdCardTitleFontStyle className={font}>
      {title}
    </AboutMeIdCardTitleFontStyle>
  )
}

export default React.memo(AboutMeIdCardTitleView)