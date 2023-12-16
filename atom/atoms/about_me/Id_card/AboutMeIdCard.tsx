import React from "react";
import AboutMeIdCardView from "@/atom/atoms/about_me/Id_card/AboutMeIdCardView";
import {HanSansFont, NGodicFont, RussoFont} from "@/style/font";
import AboutMeIdTitle from "@/atom/atoms/about_me/Id_card/title/AboutMeIdTitle";
import AboutMeIdCardContent from "@/atom/atoms/about_me/Id_card/content/AboutMeIdCardContent";

/**
 * About Me Id Card 전체
 * @param title => 타이틀 텍스트
 * @param content => html 형태의 콘텐츠
 * @param imageUrl => 이미지 url
 * @constructor
 */
export default function AboutMeIdCard({title, content, imageUrl}: AboutMeIdCardPropsInterface): React.JSX.Element {
  return (
    <AboutMeIdCardView>
      <AboutMeIdTitle
        font={RussoFont.className}
        title={title}
        imageUrl={imageUrl}
      />
      <AboutMeIdCardContent
        content={content}
      />
    </AboutMeIdCardView>
  )
}

