"use client"

import React from "react";
import SectionTitle from "@/atom/atoms/title/SectionTitle";
import EducationView from "@/atom/organisms/education/EducationView";
import {AcademyGrid, EducationGridStyle, OnlineGrid, UniversityGrid} from "@/atom/molecules/education/EducationStyle";
import EducationContent from "@/atom/molecules/education/EducationContent";
import XArea from "@/atom/molecules/education/XArea";


/**
 * About Me Container
 * @constructor
 */
export default function Education(): React.JSX.Element {

    const educationArray = [
        {
            index: 0,
            area: UniversityGrid,
            position: true,
            partTitle:['성결대학교' , '산업경영공학과'],
            content: ['주/야간: 주간' , '학점: 3.47/4.5'],
            image: {
                src: '/university.jpg',
                alt: 'university'
            }
        },
        {
            index: 1,
            area: AcademyGrid,
            position: false,
            partTitle:['Java 웹/앱 애플리케이션' , '개발자 과정'],
            content: ['기간: 2021..11 ~ 2022.04 ( 6개월 )' , '내용 : Springframework 기반 웹 애플리케이션 프로젝트 개발'],
            image: {
                src: '/university.jpg',
                alt: 'university'
            }
        },
        {
            index: 2,
            area: OnlineGrid,
            position: true,
            partTitle:['온라인 강의' , '인프런 , 코딩애플'],
            content: [
                '김영한 - Spring MVC 1 , 2편' ,
                '김영한 - Spring 기본 원리 , 고급 원리 , 핵심 원리',
                '백기선 - 이펙티브 자바 완벽 공략 1, 2부',
                '백기선 - GodOfDesignPettern',
                '장수원 - Spring Boot 기반으로 개발하는 Spring Security',
                '김영한 - Spring DATA JPA , 자바 ORM 표준 JPA 기본편 , Query DSL , 실전! 스프링 부트와 JPA 활용 1, 2',
                '김영한 - 모든 개발자를 위한 HTTP 웹 기본 지식',
                'Next.js 기반으로 지도 앱 만들기',
                'React.js 시작하기',
                'Next.js App Router 버전',
                'JavaScript ES6 입문'
            ],
            image: {
                src: '/university.jpg',
                alt: 'university'
            }
        },
    ]

    return (
        <EducationView>
            <SectionTitle title={'Education'} id={'education'}/>
            <EducationGridStyle>
                {
                    educationArray?.map( (value , index) => {
                        return (
                            <XArea $area={value.area} key={`${value.index}_education${index}`}>
                                <EducationContent
                                    position={value.position}
                                    content={value.content}
                                    partTitle={value.partTitle}
                                    image={value.image}
                                />
                            </XArea>
                        )
                    })
                }

            </EducationGridStyle>
        </EducationView>
    )
}