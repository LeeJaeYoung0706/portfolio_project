import React from "react";
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";


const AboutMeIdCardTitleStyle = styled.div`
  min-width: 70px;
  ${displayFlex("column", "center", "center")};
`

/**
 * AboutMe Id Title
 * @param children
 * @constructor
 */
function AboutMeIdTitleView({children}: AboutMeIdTitleViewPropsInterface): React.JSX.Element {
  return (
    <AboutMeIdCardTitleStyle>
      {children}
    </AboutMeIdCardTitleStyle>
  )
}

export default React.memo(AboutMeIdTitleView);