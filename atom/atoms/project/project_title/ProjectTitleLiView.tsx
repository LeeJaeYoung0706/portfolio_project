'use client'
import React from "react";
import styled, {css} from "styled-components";
import {NotoSansFont, RussoFont} from "@/style/font";
import {fontMiddleSizeMobile, fontMiddleSizePC, fontMiddleSizeTablet} from "@/style/theme/common";



const ProjectTitleLiStyle = styled.li<{$checked: boolean}>`
  ${ props => props.$checked ? 
          css`flex: 1; color: ${props.theme.palette.middle}; & > p {font-weight: bold;}` 
          : css` flex: 1; color: ${props.theme.palette.primary};`}
  text-align: center;
  ${fontMiddleSizePC};
  cursor: pointer;
  z-index: 350;
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
      color: ${(props) => !props.$checked && props.theme.palette.reverseSecond};
    }
  }

  &:active {
    color: ${(props) => !props.$checked && props.theme.palette.reverseSecond};
  }
`


/**
 *
 * @param title 타이틀 텍스트
 * @param checked 프로젝트 선택 여부
 * @param liOnClick 프로젝트 선택 콜백 함수
 * @constructor
 */
function ProjectTitleLiView ({title  , checked , liOnClick }: ProjectTitleLiViewInterface) : React.JSX.Element {
    return (
        <ProjectTitleLiStyle
            id={`${title}_project`}
            $checked={checked}
            onClick={liOnClick}
        >
            <p className={RussoFont.className}>{title}</p>
        </ProjectTitleLiStyle>
    )
}

export default React.memo(ProjectTitleLiView)