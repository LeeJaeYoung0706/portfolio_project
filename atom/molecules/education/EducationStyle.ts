import styled, {css} from "styled-components";
import {displayFlex} from "@/style/theme/common";


export const EducationArticleLayout = styled.article`
  padding-bottom: 120px; 
`
// 스타일 Component vs React Component 중 어느 것이 편한지 테스트 하기위해 다르게 구성했습니다.
export const EducationGridStyle = styled.article`
  display: grid;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
  max-width: 1500px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: 'educationImageArea educationImageArea university universityImgArea'
                       'educationImageArea educationImageArea academyImageArea academy'
                       'online online online onlineImgArea'
                       'online online online onlineImgArea';

  ${(props) => props.theme.media.tablet} {
    min-width: 600px;
    max-width: 700px;

    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'university universityImgArea'
                       'academyImageArea academy'
                       'online onlineImgArea'
                       'online onlineImgArea';
  }

  ${(props) => props.theme.media.mobile} {
    min-width: 360px;
    max-width: 370px;
    padding-left: 15px;
    grid-template-columns: 1fr;
    grid-template-areas: 'university'
                       'academy'
                       'online'
                       'online';
    gap: 10px;
  }
;
  grid-gap: 0px; /* 각 그리드 아이템 사이의 간격 */


`
export const EducationImageGrid = css`
  grid-area: educationImageArea;
`
export const AcademyImageGrid = css`
  grid-area: academyImageArea;
`
export const UniversityImageGrid = css`
  grid-area: universityImgArea;
`
export const OnlineImageGrid = css`
  grid-area: onlineImgArea;
`
export const UniversityGrid = css`
  grid-area: university;
`

export const AcademyGrid = css`
  grid-area: academy;
`

export const OnlineGrid = css`
  grid-area: online;
`

//  ${(props) => props.theme.media.tablet} {
//     ${displayFlex('column', 'center', 'center')}
//   }
//
//   ${(props) => props.theme.media.mobile} {
//     ${displayFlex('column', 'center', 'center')}
//   }