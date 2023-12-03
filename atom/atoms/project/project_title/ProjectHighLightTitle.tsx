import styled from "styled-components";
import React from "react";
import {OrbitFont} from "@/style/font";


const ProjectHighLightStyle = styled.div`
  width: 100%;
  padding: 30px;
  text-align: center;
`

const TitleStyle = styled.h1`
  font-size: 3.2em;
  font-weight: bold;
  color: ${props => props.theme.palette.second};
  line-height: 1.5;
  ${(props) => props.theme.media.tablet} {
    font-size: 3.0em;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 2.8em;
  }
`

const DescriptionStyle = styled.p`
  color: ${props => props.theme.palette.primary};
`

function ProjectHighLightTitle({project}: ProjectHighLightTitleInterface): React.JSX.Element {

    if (project === undefined) {
        return <ProjectHighLightStyle className={OrbitFont.className}>Project</ProjectHighLightStyle>;
    }

    return (
        <ProjectHighLightStyle className={OrbitFont.className}>
            <TitleStyle>{project?.title || ''}</TitleStyle>
            <DescriptionStyle>
                {project?.description || ''}
            </DescriptionStyle>
        </ProjectHighLightStyle>
    )
}

export default React.memo(ProjectHighLightTitle)