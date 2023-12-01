import React from "react";
import styled from "styled-components";

const ProjectBorderContentStyle = styled.div`
  
`

function ProjectBorderContentView({children} : ComponentPropsInterface):React.JSX.Element {
    return (
        <ProjectBorderContentStyle>
            {children}
        </ProjectBorderContentStyle>
    )
}

export default React.memo(ProjectBorderContentView)