import AboutMeIdCardListView from "@/atom/molecules/about_me/AboutMeIdCardListView";
import React from "react";
import AboutMeIdCard from "@/atom/atoms/about_me/Id_card/AboutMeIdCard";
import IntroContentView from "@/atom/atoms/about_me/introduction/AboutMeIntroContent";
import {IdCardListLayout} from "@/atom/atoms/about_me/Id_card/IdCardListLayout";

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
            <IdCardListLayout>
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
            </IdCardListLayout>
        </AboutMeIdCardListView>
    )
}