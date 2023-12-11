import React from "react";
import styled from "styled-components";
import {fontMiddleSizeMobile, fontMiddleSizePC, fontMiddleSizeTablet} from "@/style/theme/common";
import {NGodicFont, NotoSansFont} from "@/style/font";


const ContentStyle = styled.div`
  font-size: 18px;
  line-height: 1.7;
  padding-bottom: 20px;
  color: ${props => props.theme.palette.primary};
  ${(props) => props.theme.media.tablet} {
    font-size: 16px;
    padding-bottom: 15px;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 16px;
    padding-bottom: 10px;
  }
`

const ProjectTextPartViewStyle = styled.div`
  padding: 30px 10px;
  width: 100%;
  
  ${(props) => props.theme.media.tablet} {
    padding: 30px 10px;
  }

  ${(props) => props.theme.media.mobile} {
    padding: 30px 20px;
  }
`

const NumberColorSpan = styled.span`
  color: ${props => props.theme.palette.second70};
  font-weight: bold;
  font-size: 22px;
  
  ${(props) => props.theme.media.tablet} {
    font-size: 20px;
    padding-bottom: 15px;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 18px;
    padding-bottom: 10px;
  }
`

/**
 * Content Text 요소
 * @param content 프로젝트 콘텐츠
 * @constructor
 */
function ProjectContentTextPartView({content}: ProjectContentTextPartPropsInterface):React.JSX.Element {
    return (
        <ProjectTextPartViewStyle>
            {
                content?.length > 0 ?
                    content?.map( (value , index) => {
                        return (
                            <ContentStyle key={`${index}_${value}`} className={NotoSansFont.className}>
                               <NumberColorSpan>* </NumberColorSpan>&nbsp; &nbsp; {value}
                            </ContentStyle>
                        )
                    }) : (
                        <ContentStyle className={NotoSansFont.className}>
                            ✱ {content}
                        </ContentStyle>
                    )
            }
        </ProjectTextPartViewStyle>
    )
}

export default React.memo(ProjectContentTextPartView)