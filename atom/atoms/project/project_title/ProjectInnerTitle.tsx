import React from "react";
import styled from "styled-components";
import {TitllFont} from "@/style/font";
import {MiddleTitleFontSizeMobile, MiddleTitleFontSizePC, MiddleTitleFontSizeTablet} from "@/style/theme/common";

const ProjectInnerTitleStyle = styled.p`
  ${MiddleTitleFontSizePC};
  line-height: 2.7;
  font-weight: bold;
  color: ${props => props.theme.palette.second};
  position: relative;

  ${(props) => props.theme.media.tablet} {
    ${MiddleTitleFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${MiddleTitleFontSizeMobile};
  }

  &:before {
    content: '';
    position: absolute;
    top: 61px;
    left: 0;
    width: 51px;
    height: 3px;
    border-radius: 1% 40% 40% 40%;
    background-image: linear-gradient(to bottom right, ${props => props.theme.palette.reverseSecond}, ${props => props.theme.palette.middle});
  }
`

/**
 * Border 내 소제목
 * @param title => string 텍스트
 * @constructor
 */
function ProjectInnerTitle({title}: ProjectInnerTitleInterface): React.JSX.Element {
  return (
    <ProjectInnerTitleStyle className={TitllFont.className}>
      {title}
    </ProjectInnerTitleStyle>
  )
}

export default React.memo(ProjectInnerTitle)