import React from "react";
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";


const ProjectContentViewStyle = styled.div`
  ${displayFlex("row", "space-between", "center")};
  width: 100%;
`

function ProjectContentView({children}: ComponentPropsInterface): React.JSX.Element {
    return (
        <ProjectContentViewStyle>
            {children}
        </ProjectContentViewStyle>
    )
}

export default React.memo(ProjectContentView)