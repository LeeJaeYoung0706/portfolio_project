import React from "react";
import AboutMeIdCardView from "@/atom/atoms/about_me/Id_card/AboutMeIdCardView";
import styled from "styled-components";
import {NGodicFont, OrbitFont} from "@/style/font";
import AboutMeIdTitle from "@/atom/atoms/about_me/Id_card/title/AboutMeIdTitle";
import AboutMeIdCardContent from "@/atom/atoms/about_me/Id_card/content/AboutMeIdCardContent";




/**
 * About Me Id Card 전체
 * @param title
 * @param content
 * @param imageUrl
 * @constructor
 */
export default function AboutMeIdCard ( {title , content , imageUrl} : AboutMeIdCardPropsInterface): React.JSX.Element {
    return (
        <AboutMeIdCardView>
            <AboutMeIdTitle font={NGodicFont.className} title={title} imageUrl={imageUrl}/>
            <AboutMeIdCardContent content={content}/>
        </AboutMeIdCardView>
    )
}

