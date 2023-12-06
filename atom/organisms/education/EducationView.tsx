import React from 'react';
import styled from "styled-components";
import {color} from "@/style/theme/color";

const EducationLayoutStyle = styled.section`
    background-color: ${color.white};
`

/**
 * AboutMe View
 * @param children
 * @constructor
 */
function EducationView({children}: AboutMeInterface): React.JSX.Element {
    return (
        <EducationLayoutStyle>
            {children}
        </EducationLayoutStyle>
    )
}

export default React.memo(EducationView)