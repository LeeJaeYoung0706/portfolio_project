import React from "react";
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";


const ProjectTitleViewStyle = styled.ul`
  list-style: none;
  padding: 0;
  min-height: 120px;
  margin-bottom: 40px;

  z-index: 350;
  ${displayFlex('row', 'center', 'center')};

  & li:last-child {
    border-right: none;
  }

  ${(props) => props.theme.media.tablet} {
    min-height: 230px;
    ${displayFlex('row', 'space-between', 'center', 'flex', true)}
  }

  ${(props) => props.theme.media.mobile} {
    min-height: 230px;
    ${displayFlex('row', 'space-around', 'center', 'flex', true)}
  }
`

/**
 * Project Title Ul View
 * @param children
 * @constructor
 */
function ProjectTitleUlView({children} : ProjectTitleViewInterface):React.JSX.Element {

    return (
        <ProjectTitleViewStyle>
            {children}
        </ProjectTitleViewStyle>
    )
}

export default React.memo(ProjectTitleUlView);