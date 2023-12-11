import React from 'react';
import styled from "styled-components";
import {color} from "@/style/theme/color";

const AboutMeLayoutStyle = styled.section`
  background-color: ${props => props.theme.palette.background};

  margin-top: 200px;
`

/**
 * AboutMe View
 * @param children
 * @constructor
 */
function AboutMeView({children}: AboutMeInterface): React.JSX.Element {
    return (
        <AboutMeLayoutStyle>
            {children}
        </AboutMeLayoutStyle>
    )
}

export default React.memo(AboutMeView)