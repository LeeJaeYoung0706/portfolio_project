'use client'
import React from "react";
import styled, {css} from "styled-components";
import {TitllFont, kdamThmorPro} from "@/style/font";
import {displayFlex} from "@/style/theme/common";



const ProjectTitleLiStyle = styled.li<{$checked: boolean}>`
  ${ props => props.$checked ? 
          css`flex: 1; color: ${props.theme.palette.reverse};` 
          : css` flex: 1; color: ${props.theme.palette.primary};`}
  text-align: center;
  font-size: 2.5em;
  cursor: pointer;
  padding-top: 30px;
  
  ${(props) => props.theme.media.tablet} {
    flex: none;
    width: 30%;
    font-size: 2.2em;
    padding-bottom: 30px;
  }

  ${(props) => props.theme.media.mobile} {
    flex: none;
    font-size: 1.6em;
    width: 40%;
    padding-bottom: 30px;
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


/**
 * Project Title View
 * @param children
 * @constructor
 */
function ProjectTitleLiView ({title  , checked , liOnClick }: ProjectTitleLiViewInterface) : React.JSX.Element {
    return (
        <ProjectTitleLiStyle id={`${title}_project`} $checked={checked} onClick={liOnClick}>
            <p className={TitllFont.className}>{title}</p>
        </ProjectTitleLiStyle>
    )
}

export default React.memo(ProjectTitleLiView)