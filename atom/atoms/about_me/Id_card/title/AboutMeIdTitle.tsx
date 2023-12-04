import React from "react";
import AboutMeIdTitleView from "@/atom/atoms/about_me/Id_card/title/AboutMeIdTitleView";
import AboutMeIdTitleImage from "@/atom/atoms/about_me/Id_card/title/AboutMeIdTitleImage";
import AboutMeIdCardTitle from "@/atom/atoms/about_me/Id_card/title/AboutMeIdCardTitle";

/**
 * AboutMe Id Title
 * @param children
 * @constructor
 */
export default function AboutMeIdTitle({font, title, imageUrl}: { font: string, title: string, imageUrl: string }): React.JSX.Element {
    return (
        <AboutMeIdTitleView>
            <AboutMeIdTitleImage title={title} imageUrl={imageUrl}/>
            <AboutMeIdCardTitle font={font} title={title}/>
        </AboutMeIdTitleView>
    )
}

