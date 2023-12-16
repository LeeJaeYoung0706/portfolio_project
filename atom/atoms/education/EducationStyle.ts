import styled from "styled-components";
import {
  ContentFontSizeMobile,
  ContentFontSizePC, ContentFontSizeTablet, ContentLineHeight,
  MiddleTitleFontSizeMobile,
  MiddleTitleFontSizePC, MiddleTitleFontSizeTablet
} from "@/style/theme/common";


export const EducationGridContentLayoutStyle = styled.div`
  padding: 40px;
  width: 100%;

  ${(props) => props.theme.media.tablet} {
    padding: 20px;
  }

  ${(props) => props.theme.media.mobile} {
    padding: 20px;
  }
`

export const EducationGridContentTitleStyle = styled.div`
  ${MiddleTitleFontSizePC};
  font-weight: bold;
  margin-bottom: 5px;
  color: ${props => props.theme.palette.primary};

  ${(props) => props.theme.media.tablet} {
    ${MiddleTitleFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${MiddleTitleFontSizeMobile};
  }
`

export const EducationGridContentTextStyle = styled.div`
  margin-top: 10px;
  color: ${props => props.theme.palette.primary};
  ${ContentFontSizePC};
  ${ContentLineHeight};
  ${(props) => props.theme.media.tablet} {
    ${ContentFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${ContentFontSizeMobile};
  }
`