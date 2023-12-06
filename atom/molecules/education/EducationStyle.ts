import styled, {css} from "styled-components";
import {displayFlex} from "@/style/theme/common";


export const EducationGridStyle = styled.article`
  display: grid;
  padding: 20px 12vw 80px 12vw;
  overflow-x: hidden;
  grid-template-areas: 'university university university'
                       'academy academy academy'
                       'online online online';
  grid-gap: 15px; /* 각 그리드 아이템 사이의 간격 */
  
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