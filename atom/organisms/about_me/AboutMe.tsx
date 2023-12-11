"use client"
import AboutMeView from "@/atom/organisms/about_me/AboutMeView";
import React from "react";
import SectionTitle from "@/atom/atoms/title/SectionTitle";
import AboutMeIdCardList from "@/atom/molecules/about_me/AboutMeIdCardList";
import {IdCardContentList} from "@/atom/organisms/about_me/AboutMeDescription";

/**
 * About Me Container
 * @constructor
 */
export default function AboutMe(): React.JSX.Element {

  return (
    <AboutMeView>
      <AboutMeIdCardList idCardContentList={IdCardContentList}/>
    </AboutMeView>
  )
}