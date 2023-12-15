import React from "react";
import styled, {css} from "styled-components";
import Image from "next/image";
import {dark} from "@/style/theme/dark";


const ImageDiv = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  box-sizing: border-box;
  position: relative;
  ${props => props.theme === dark && css`filter: invert(100%);`};

  ${(props) => props.theme.media.tablet} {
    width: 25px;
    height: 25px;
    margin-right: 15px;
  }

  ${(props) => props.theme.media.mobile} {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
`


/**
 *  About Title Image
 * @param imageUrl 이미지 url
 * @param title 타이틀 텍스트
 * @constructor
 */
function AboutMeIdTitleImage({imageUrl, title}: AboutMeIdTitleImagePropsInterface): React.JSX.Element {
  return (
    <ImageDiv>
      <Image src={imageUrl} alt={title} fill sizes={'(max-width: 767px) 28px , 30px'}/>
    </ImageDiv>
  )
}

export default React.memo(AboutMeIdTitleImage)