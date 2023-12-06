import React from 'react';
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";

const AboutMeIdCardStyle = styled.div`
  ${displayFlex('column' , 'space-around' , 'center')};
  width: 300px;
  box-sizing: border-box;
  margin-top: 50px;
`
function AboutMeIdCardView({children}: AboutMeIdCardViewInterface): React.JSX.Element {
    return (
        <AboutMeIdCardStyle>
            {children}
        </AboutMeIdCardStyle>
    )
}

export default React.memo(AboutMeIdCardView)