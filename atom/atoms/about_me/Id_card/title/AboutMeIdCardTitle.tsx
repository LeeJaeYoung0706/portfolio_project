import React from "react";
import styled from "styled-components";
import {fontMiddleSizeMobile, fontMiddleSizePC, fontMiddleSizeTablet} from "@/style/theme/common";
import {NotoSansFont} from "@/style/font";

const AboutMeIdCardTitleFontStyle = styled.h3`
  font-size: 30px;
  line-height: 1;
  color: ${(props => props.theme.palette.second)};
  min-width: 100px;
  
  ${(props) => props.theme.media.tablet} {
    font-size: 28px;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 24px;
  }

}
`

/**
 * About Me Id Card Title
 * @param font => font ClassName => String
 * @param title => 타이틀 명
 * @constructor
 */
function AboutMeIdCardTitle ( {font , title} : AboutMeIdCardTitlePropsInterface) :React.JSX.Element {
    return (
        <AboutMeIdCardTitleFontStyle className={font}>
            {title}
        </AboutMeIdCardTitleFontStyle>
    )
}

export default React.memo(AboutMeIdCardTitle)