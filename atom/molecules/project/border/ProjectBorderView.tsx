import React from "react";
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";

const ProjectBorderViewStyle = styled.div`
  width: 100%;
  padding: 20px 12vw 80px 12vw;
  
  ${(props) => props.theme.media.tablet} {
    ${displayFlex('column' , 'center' , 'center')}
    min-width: 600px;
  }

  ${(props) => props.theme.media.mobile} {
    min-width: 470px;
  }
`

/**
 * Project Border View
 * @param children
 * @constructor
 */
function ProjectBorderView ({children} : ComponentPropsInterface) : React.JSX.Element {
    return (
        <ProjectBorderViewStyle>
           {children}
        </ProjectBorderViewStyle>
    )
}

export default React.memo(ProjectBorderView)