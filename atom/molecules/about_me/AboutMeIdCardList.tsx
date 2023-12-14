import AboutMeIdCardListView from "@/atom/molecules/about_me/AboutMeIdCardListView";
import React from "react";
import AboutMeIdCard from "@/atom/atoms/about_me/Id_card/AboutMeIdCard";
import IntroContentView from "@/atom/atoms/about_me/introduction/AboutMeIntroContent";
import {IdCardListStyles} from "@/atom/atoms/about_me/Id_card/Styles";
import SectionTitle from "@/atom/atoms/title/SectionTitle";

/**
 *
 * About Me Id card Container
 * @param idCardContentList title: string , before: string , $imageUrl: string list 형태
 * @constructor
 */
export default function AboutMeIdCardList({idCardContentList}: AboutMeIdCardListInterface): React.JSX.Element {
  return (
    <AboutMeIdCardListView>
      <SectionTitle title={'ABOUT'} id={'about'}/>
      <IntroContentView/>
      <IdCardListStyles>
        {
          idCardContentList?.length !== 0 &&
          idCardContentList?.map((value, index) => {
            return (
              <AboutMeIdCard
                title={value.title}
                content={value.content}
                key={index}
                imageUrl={value.$imageUrl}
              />
            )
          })
        }
      </IdCardListStyles>
    </AboutMeIdCardListView>
  )
}