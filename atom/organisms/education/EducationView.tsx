import React from 'react';
import styled from "styled-components";


const EducationLayoutStyle = styled.section`
  background-color: ${props => props.theme.palette.reverse};
`

/**
 * AboutMe View
 * @param children
 * @constructor
 */
function EducationView({children}: EducationPropsInterface): React.JSX.Element {
  return (
    <EducationLayoutStyle>
      {children}
    </EducationLayoutStyle>
  )
}

export default React.memo(EducationView)