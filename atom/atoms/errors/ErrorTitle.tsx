import React from "react";
import styled from "styled-components";
import {
  ContentFontSizeMobile,
  ContentFontSizePC, ContentFontSizeTablet,
  displayFlex,
  MiddleTitleFontSizeMobile,
  MiddleTitleFontSizePC,
  MiddleTitleFontSizeTablet
} from "@/style/theme/common";
import {NGodicFont} from "@/style/font";

const ErrorTitleDivStyle = styled.div`
 ${displayFlex('column' , 'center' , 'center')};
`
const ErrorTitleContentStyle = styled.h3`
  color: ${props => props.theme.palette.primary};
  ${MiddleTitleFontSizePC};
  font-weight: bold;
  ${(props) => props.theme.media.tablet} {
    ${MiddleTitleFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${MiddleTitleFontSizeMobile};
  }
`
const ErrorTitleSubStyle = styled.h3`
  color: crimson;
  font-size: 12px;

  ${(props) => props.theme.media.tablet} {
    font-size: 11px;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 10px;
  }
`

function ErrorTitle():React.JSX.Element {
  return (
    <ErrorTitleDivStyle>
      <ErrorTitleContentStyle className={NGodicFont.className}>
        비밀번호를 입력해주세요.
      </ErrorTitleContentStyle>
      <ErrorTitleSubStyle className={NGodicFont.className}>
        함께 제공된 GET PARAMETER 를 다시 한번 확인해주세요.
      </ErrorTitleSubStyle>
    </ErrorTitleDivStyle>
  )
}

export default React.memo(ErrorTitle)