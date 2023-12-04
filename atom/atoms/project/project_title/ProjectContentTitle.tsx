import React from "react";
import styled from "styled-components";

const ProjectContentTitleStyle = styled.div`

`
function ProjectContentTitle({introductionTitle} : {introductionTitle: string}):React.JSX.Element {
    return  (
        <ProjectContentTitleStyle>
            {introductionTitle}
        </ProjectContentTitleStyle>
    )
}

export default React.memo(ProjectContentTitle)