'use client'
import React from "react";
import styled, {css} from "styled-components";
import {kdamThmorPro} from "@/style/font";
import {displayFlex} from "@/style/theme/common";

const commonCSS = css`
  flex: none;
  width: 30%;
  padding-bottom: 30px;
`

const ProjectTitleLiStyle = styled.li<{$checked: boolean}>`
  ${ props => props.$checked ? 
          css` flex: 2; color: ${props.theme.palette.reverseSecond};` 
          : css` flex: 1; color: ${props.theme.palette.primary};`}
  text-align: center;
  font-size: 2em;
  cursor: pointer;
  padding-top: 30px;
  
  ${(props) => props.theme.media.tablet} {
    ${commonCSS}
  }

  ${(props) => props.theme.media.mobile} {
    ${commonCSS}
  }
  
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${(props) => props.theme.palette.reverseSecond};
    }
  }

  &:active {
    color: ${(props) => props.theme.palette.reverseSecond};
  }
`

function ProjectTitleLiView ({title  , checked , liOnClick }: ProjectTitleLiViewInterface) : React.JSX.Element {
    return (
        <ProjectTitleLiStyle id={`${title}_project`} $checked={checked} onClick={liOnClick}>
            <p className={kdamThmorPro.className}>{title}</p>
        </ProjectTitleLiStyle>
    )
}

export default React.memo(ProjectTitleLiView)