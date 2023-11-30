import React from "react";
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";

const AboutMeIdCardListViewStyle = styled.div`
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

function AboutMeIdCardListView ({children} : AboutMeIdCardListViewInterface): React.JSX.Element {
    return (
        <AboutMeIdCardListViewStyle>
            {children}
        </AboutMeIdCardListViewStyle>
    )
}

export default React.memo(AboutMeIdCardListView)