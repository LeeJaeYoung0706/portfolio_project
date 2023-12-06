import styled from "styled-components";
import React from "react";
import {TitllFont} from "@/style/font";
import ProjectLinkTag from "@/atom/atoms/project/project_title/ProjectLinkTag";
import {displayFlex} from "@/style/theme/common";


const ProjectHighLightStyle = styled.div`
  width: 100%;
  padding: 30px;
  text-align: center;
  ${displayFlex('column' , 'center' , 'center')}
`

const TitleStyle = styled.h1`
  font-size: 42px;
  font-weight: bold;
  color: ${props => props.theme.palette.second};
  line-height: 1.5;
  ${(props) => props.theme.media.tablet} {
    font-size: 38px;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 32px;
  }
`

const PeriodStyle = styled.p`
  color: ${props => props.theme.palette.primary};
`

/**
 * 프로젝트 선택 시 강조
 * @param project
 * @constructor
 */
function ProjectHighLightTitle({project}: ProjectHighLightTitleInterface): React.JSX.Element {

    if (project === undefined) {
        return <ProjectHighLightStyle className={TitllFont.className}>Project</ProjectHighLightStyle>;
    }

    return (
        <ProjectHighLightStyle className={TitllFont.className}>
            <TitleStyle>{project?.title || ''}</TitleStyle>
            <PeriodStyle>
                {project?.period || ''}
            </PeriodStyle>

        </ProjectHighLightStyle>
    )
}

export default React.memo(ProjectHighLightTitle)