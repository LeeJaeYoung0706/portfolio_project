import React from "react";
import styled from "styled-components";
import {TitllFont} from "@/style/font";

const ProjectInnerTitleStyle = styled.div`
  font-size: 3.2em;
  line-height: 2.7em;
  font-weight: bold;
  color: ${props => props.theme.palette.second};
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 2.0em;
    left: 0;
    width: 1.5em;
    height: 3px;
    border-radius: 1% 40% 40% 40%;
    background-image: linear-gradient(to bottom right, ${props => props.theme.palette.reverseSecond} , ${props => props.theme.palette.middle} );
  }
`

/**
 * Border 내 소제목
 * @param title
 * @constructor
 */
function ProjectInnerTitle({title} : {title: string}):React.JSX.Element {
    return  (
        <ProjectInnerTitleStyle className={TitllFont.className}>
            {title}
        </ProjectInnerTitleStyle>
    )
}

export default React.memo(ProjectInnerTitle)