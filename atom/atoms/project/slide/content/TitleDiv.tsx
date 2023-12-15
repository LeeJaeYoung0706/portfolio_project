import React from "react";
import Image from "next/image";
import styled from "styled-components";
import {
  displayFlex,
  MiddleTitleFontSizeMobile,
  MiddleTitleFontSizePC, MiddleTitleFontSizeTablet
} from "@/style/theme/common";
import {NGodicFont, NotoSansFont} from "@/style/font";

const TitleDivStyle = styled.div<{ $position: boolean }>`

  padding: 15px;
  overflow-x: hidden;
  min-width: 300px;
  width: 100%;
  font-weight: bold;
  height: 100%;


  ${props => props?.$position ? displayFlex("row", "flex-start", "center") :
          displayFlex("row", "flex-end", "center")};

  ${(props) => props.theme.media.tablet} {
  }

  ${(props) => props.theme.media.mobile} {
  }
`

const TitlePStyled = styled.p`
  color: ${props => props.theme.palette.second};
  position: relative;
  ${MiddleTitleFontSizePC};
  padding-bottom: 10px;

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 600%;
    height: 3px;
    background-color: ${props => props.theme.palette.primary};
  }

  ${(props) => props.theme.media.tablet} {
    ${MiddleTitleFontSizeTablet};

    &:after {
      width: 700%;
    }
  }

  ${(props) => props.theme.media.mobile} {
    ${MiddleTitleFontSizeMobile};

    &:after {
      width: 500%;
    }
  }
`


/**
 *
 * @param title 내부 콘텐츠 타이틀
 * @param position 왼쪽 오른쪽 여부 사용 할지 안할지 아직 모릅니다
 * @param src 사용 할지 안할지 아직 모릅니다
 * @param alt 사용 할지 안할지 아직 모릅니다
 * @constructor
 */
function TitleDiv({title, position, src, alt}: ProjectSlideTitleDivPropsInterface): React.JSX.Element {

  return (
    <TitleDivStyle className={NGodicFont.className} $position={position}>
      <TitlePStyled>{title}</TitlePStyled>
      {/*<ImageDiv src={src} alt={alt} fill />*/}
    </TitleDivStyle>
  )
}

export default React.memo(TitleDiv)