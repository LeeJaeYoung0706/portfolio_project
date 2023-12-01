import AboutMeIdCardListView from "@/atom/molecules/about_me/AboutMeIdCardListView";
import React from "react";
import AboutMeIdCard from "@/atom/atoms/about_me/Id_card/AboutMeIdCard";
import IntroContentView from "@/atom/atoms/about_me/ introduction/IntroContentView";

/**
 *
 * About Me Id card Container
 * @param idCardContentList
 * @constructor
 */
export default function AboutMeIdCardList( {idCardContentList} : AboutMeIdCardListInterface): React.JSX.Element {
    return (
        <AboutMeIdCardListView>
            <IntroContentView />
            {
                idCardContentList?.length !== 0 &&
                idCardContentList?.map( (value, index) => {
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
        </AboutMeIdCardListView>
    )
}