import React from "react";
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";

const AboutMeIdCardListViewStyle = styled.article`
  width: 100%;
  line-height: 1;
  padding-bottom: 60px;
  ${displayFlex('row' , 'space-around' , 'center' , 'flex' , true)}
  
  ${(props) => props.theme.media.tablet} {
    ${displayFlex('row' , 'space-around' , 'center', 'flex' , true)}
  }

  ${(props) => props.theme.media.mobile} {
    ${displayFlex('column' , 'space-around' , 'center')}
  }
`

/**
 * AboutMe Id Card View
 * @param children
 * @constructor
 */
function AboutMeIdCardListView ({children} : AboutMeIdCardListViewInterface): React.JSX.Element {
    return (
        <AboutMeIdCardListViewStyle>
            {children}
        </AboutMeIdCardListViewStyle>
    )
}

export default React.memo(AboutMeIdCardListView)