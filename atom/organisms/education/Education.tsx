"use client"
import React from "react";
import SectionTitle from "@/atom/atoms/title/SectionTitle";
import EducationView from "@/atom/organisms/education/EducationView";
import {
    EducationGridStyle
} from "@/atom/molecules/education/EducationStyle";
import EducationArea from "@/atom/molecules/education/grid/EducationArea";
import Image from "next/image";
import EducationImageDiv from "@/atom/atoms/education/EducationImageDiv";
import {educationArray, educationImageArray} from "@/atom/organisms/education/EducationDescription";
import {
    EducationGridContentLayoutStyle,
    EducationGridContentTextStyle,
    EducationGridContentTitleStyle
} from "@/atom/atoms/education/EducationStyle";
import {NGodicFont} from "@/style/font";


/**
 * About Me Container
 * @constructor
 */
export default function Education(): React.JSX.Element {

    return (
        <EducationView>
            <SectionTitle title={'Education'} id={'education'}/>
            <EducationGridStyle>
                {
                    educationImageArray?.map((value, index) => {
                        return (
                            <EducationArea
                                $area={value?.$area}
                                key={`${value?.$area}-${value?.src}`}
                            >
                                <EducationImageDiv
                                    src={value?.src} alt={value?.alt}
                                />
                            </EducationArea>
                        )
                    })
                }
                {
                    educationArray?.map((value, index) => {
                        return (
                            <EducationArea
                                $area={value?.$area}
                                key={`${value?.$area}-${value?.index}`}
                            >
                                <EducationGridContentLayoutStyle>
                                    {
                                        value?.partTitle?.map((value, index) => {
                                            return (
                                                <EducationGridContentTitleStyle className={NGodicFont.className}
                                                                                key={`${value}-${index}`}>
                                                    {value}
                                                </EducationGridContentTitleStyle>
                                            )
                                        })
                                    }
                                    <hr/>
                                    {
                                        value?.content?.map((value, index) => {
                                            return (
                                                <EducationGridContentTextStyle className={NGodicFont.className}
                                                                               key={`${value}-${index}`}>
                                                    <p dangerouslySetInnerHTML={{__html: value}}/>
                                                </EducationGridContentTextStyle>
                                            )
                                        })
                                    }
                                </EducationGridContentLayoutStyle>
                            </EducationArea>
                        )
                    })
                }
            </EducationGridStyle>
        </EducationView>
    )
}