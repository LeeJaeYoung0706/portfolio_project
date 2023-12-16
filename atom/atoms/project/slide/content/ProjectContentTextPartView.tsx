import React from "react";
import styled from "styled-components";
import {
  ContentFontSizeMobile,
  ContentFontSizePC,
  ContentFontSizeTablet, ContentLineHeight,
} from "@/style/theme/common";
import {NGodicFont, NotoSansFont} from "@/style/font";
import Image from "next/image";


const ContentStyle = styled.div`
  ${ContentFontSizePC};
  ${ContentLineHeight};

  color: ${props => props.theme.palette.primary};

  ${(props) => props.theme.media.tablet} {
    ${ContentFontSizeTablet};
    line-height: 2.1;
  }

  ${(props) => props.theme.media.mobile} {
    ${ContentFontSizeMobile};
  }
`

const ProjectTextPartViewStyle = styled.div`
  padding: 15px;
  width: 100%;

  ${(props) => props.theme.media.tablet} {
    padding: 15px;
  }

  ${(props) => props.theme.media.mobile} {
    padding: 15px;
  }
`

const CheckIconLayout = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  padding: 5px;
  display: inline-block;
  margin-right: 10px;
  ${(props) => props.theme.media.tablet} {
    ${ContentFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${ContentFontSizeMobile};
  }
`

const CheckIcon = styled(Image)`
  color: ${props => props.theme.palette.second70};
  position: absolute;
`

/**
 * Content Text 요소
 * @param content 프로젝트 콘텐츠
 * @constructor
 */
function ProjectContentTextPartView({content}: ProjectContentTextPartPropsInterface): React.JSX.Element {
  return (
    <ProjectTextPartViewStyle>
      {
        content?.length > 0 ?
          content?.map((value, index) => {
            return (
              <ContentStyle key={`${index}_${value}`} className={NotoSansFont.className}>

                <CheckIconLayout>
                  <CheckIcon
                    alt={"check"}
                    src={"/check.png"}
                    fill
                    sizes={"30px"}
                  />
                </CheckIconLayout>
                {value}
              </ContentStyle>
            )
          }) : (
            <ContentStyle className={NotoSansFont.className}>
              <CheckIconLayout>
                <CheckIcon
                  alt={"check"}
                  src={"/check.png"}
                  fill
                  sizes={"30px"}
                />
              </CheckIconLayout>
              {content}
            </ContentStyle>
          )
      }
    </ProjectTextPartViewStyle>
  )
}

export default React.memo(ProjectContentTextPartView)