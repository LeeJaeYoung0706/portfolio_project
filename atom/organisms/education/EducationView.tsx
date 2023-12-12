import React from 'react';
import styled from "styled-components";


const EducationLayoutStyle = styled.section`
  background-color: ${props => props.theme.palette.reverse};
  padding-bottom: 150px;
    padding-bottom: 180px;
    padding-top: 150px;
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