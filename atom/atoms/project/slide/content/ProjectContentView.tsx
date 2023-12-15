import React from "react";
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";


const ProjectContentViewStyle = styled.div`
  ${displayFlex("column", "space-around", "center")};
  width: 100%;
`

/**
 * Project 클릭 시 내부 요소 스타일
 * @param children
 * @constructor
 */
function ProjectContentView({children}: ComponentPropsInterface): React.JSX.Element {
  return (
    <ProjectContentViewStyle>
      {children}
    </ProjectContentViewStyle>
  )
}

export default React.memo(ProjectContentView)