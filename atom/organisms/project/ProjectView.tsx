import React from "react";
import styled from "styled-components";
import {color} from "@/style/theme/color";


const ProjectViewStyle = styled.section`
  background-color: ${props => props.theme.palette.reverse};
`

/**
 * Project 부분 View
 * @param children
 * @constructor
 */
function ProjectView({children}: ProjectPropsInterface): React.JSX.Element {
  return (
    <ProjectViewStyle>
      {children}
    </ProjectViewStyle>
  )
}

export default React.memo(ProjectView)