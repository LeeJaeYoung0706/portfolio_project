"use client"
import AboutMeView from "@/atom/organisms/about_me/AboutMeView";
import React from "react";
import SectionTitle from "@/atom/atoms/title/SectionTitle";
import AboutMeIdCardList from "@/atom/molecules/about_me/AboutMeIdCardList";


export default function AboutMe(): React.JSX.Element {

    const IdCardContentList = [
        {
            title: '이름',
            content: '이재영',
            $imageUrl: '/signature.svg',
        },
        {
            title: '이메일',
            content: 'Qaz774422@naver.com',
            $imageUrl: '/envelope.svg',
        },
        {
            title: '주소',
            content: '안양시',
            $imageUrl: '/alternate-map-marker.svg',
        },
        {
            title: '전화',
            content: '01037346433',
            $imageUrl: '/phone-call.svg',
        },
        {
            title: 'Notion',
            content: `<a href="https://www.notion.so/leejaeyoung/LeeJaeYoung-Dev-Note-e75eb214139e4d098ba484f11d7f72b0">Move</a>`,
            $imageUrl: '/notion.png',
        },
        {
            title: 'Github',
            content: `<a href="https://github.com/LeeJaeYoung0706?tab=repositories">Move</a>`,
            $imageUrl: '/github.png',
        },

    ]

    return (
        <AboutMeView>
            <SectionTitle title={'About Me'} id={'about_me'}/>
            <AboutMeIdCardList idCardContentList={IdCardContentList}/>
        </AboutMeView>
    )
}