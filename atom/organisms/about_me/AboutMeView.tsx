import React from 'react';
import styled from "styled-components";
import {color} from "@/style/theme/color";

const AboutMeLayoutStyle = styled.section`
    background-color: ${color.white};
`

function AboutMeView({children}: AboutMeInterface): React.JSX.Element {
    return (
        <AboutMeLayoutStyle>
            {children}
        </AboutMeLayoutStyle>
    )
}

export default React.memo(AboutMeView)