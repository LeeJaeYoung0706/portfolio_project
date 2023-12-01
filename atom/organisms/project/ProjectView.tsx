import React from "react";
import styled from "styled-components";
import {color} from "@/style/theme/color";


const ProjectViewStyle = styled.div`
  background-color: ${color.white};
`

function ProjectView({children}: ProjectPropsInterface):React.JSX.Element {
    return (
        <ProjectViewStyle>
            {children}
        </ProjectViewStyle>
    )
}

export default React.memo(ProjectView)