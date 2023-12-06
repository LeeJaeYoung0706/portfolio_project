'use client'
import React from "react";
import styled, {css} from "styled-components";
import {TitllFont, kdamThmorPro} from "@/style/font";
import {displayFlex, fontMiddleSizeMobile, fontMiddleSizePC, fontMiddleSizeTablet} from "@/style/theme/common";



const ProjectTitleLiStyle = styled.li<{$checked: boolean}>`
  ${ props => props.$checked ? 
          css`flex: 1; color: ${props.theme.palette.reverse};` 
          : css` flex: 1; color: ${props.theme.palette.primary};`}
  text-align: center;
  ${fontMiddleSizePC};
  cursor: pointer;
  padding-top: 30px;
  z-index: 302;
  ${(props) => props.theme.media.tablet} {
    flex: none;
    width: 30%;
    ${fontMiddleSizeTablet};
    padding-bottom: 30px;
  }

  ${(props) => props.theme.media.mobile} {
    flex: none;
    ${fontMiddleSizeMobile};
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
        <ProjectTitleLiStyle
            id={`${title}_project`}
            $checked={checked}
            onClick={liOnClick}>
            <p className={TitllFont.className}>{title}</p>
        </ProjectTitleLiStyle>
    )
}

export default React.memo(ProjectTitleLiView)