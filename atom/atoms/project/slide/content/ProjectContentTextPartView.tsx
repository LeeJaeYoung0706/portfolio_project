import React from "react";
import styled from "styled-components";
import {fontMiddleSizeMobile, fontMiddleSizePC, fontMiddleSizeTablet} from "@/style/theme/common";
import {NGodicFont} from "@/style/font";

const PartTitleStyle = styled.div`
  ${fontMiddleSizePC};
  padding-bottom: 10px;
  color: white;
  ${(props) => props.theme.media.tablet} {
    padding-right: 0;
    ${fontMiddleSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    padding-right: 0;
    ${fontMiddleSizeMobile};
  }
`

const ContentStyle = styled.div`
  font-size: 16px;
  color: white;
  ${(props) => props.theme.media.tablet} {
    padding-right: 0;
    font-size: 15px;
  }

  ${(props) => props.theme.media.mobile} {
    padding-right: 0;
    font-size: 14px;
  }
`

const ProjectTextPartViewStyle = styled.div`
  padding: 30px 90px;
  width: 100%;
`
function ProjectContentTextPartView({partTitle , content}: {partTitle: string , content: string[]}):React.JSX.Element {
    return (
        <ProjectTextPartViewStyle>
            <PartTitleStyle className={NGodicFont.className}>
                {partTitle}
            </PartTitleStyle>
            {
                content?.length > 0 ?
                    content?.map( (value , index) => {
                        return (
                            <ContentStyle key={`${index}_${value}`}>
                                {value}
                            </ContentStyle>
                        )
                    }) : (
                        <ContentStyle>
                            {content}
                        </ContentStyle>
                    )
            }
        </ProjectTextPartViewStyle>
    )
}

export default React.memo(ProjectContentTextPartView)