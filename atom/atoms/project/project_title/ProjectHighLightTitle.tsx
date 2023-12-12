import styled from "styled-components";
import React from "react";
import {NotoSansFont, RussoFont} from "@/style/font";
import {displayFlex} from "@/style/theme/common";


const ProjectHighLightStyle = styled.div`
  width: 100%;
  padding: 30px;
  text-align: center;
  ${displayFlex('column' , 'center' , 'center')}
`

const TitleStyle = styled.h1`
  font-size: 52px;
  font-weight: bold;
  color: ${props => props.theme.palette.middle};
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
 * @param project 프로젝트 정보  ProjectInterface 참고
 * @constructor
 */
function ProjectHighLightTitle({project}: ProjectHighLightTitleInterface): React.JSX.Element {

    if (project === undefined) {
        return <ProjectHighLightStyle className={NotoSansFont.className}>Project</ProjectHighLightStyle>;
    }

    return (
        <ProjectHighLightStyle className={RussoFont.className}>
            <TitleStyle>{project?.title || ''}</TitleStyle>
            <PeriodStyle>
                {project?.period || ''}
            </PeriodStyle>
        </ProjectHighLightStyle>
    )
}

export default React.memo(ProjectHighLightTitle)