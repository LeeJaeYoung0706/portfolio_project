import React, {useEffect, useState} from "react";
import styled, {css} from "styled-components";
import {displayFlex} from "@/style/theme/common";

//${props => props.$checked ? displayFlex('row' , 'center' , 'center' , 'flex' , true) : displayFlex('row' , 'center' , 'center')};

const ProjectTitleViewStyle = styled.ul`
  list-style: none;
  padding: 0;
  min-height: 120px;
  margin-bottom: 1em;
  
  ${displayFlex('row' , 'center' , 'center')};
  & li:last-child {
    border-right: none;
  }
  ${(props) => props.theme.media.tablet} {
    min-height: 230px;
    ${displayFlex('row' , 'space-between' , 'center' , 'flex' , true)}
  }

  ${(props) => props.theme.media.mobile} {
    min-height: 230px;
    ${displayFlex('row' , 'space-between' , 'center' , 'flex' , true)}
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