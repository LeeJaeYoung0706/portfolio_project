import {
    AcademyGrid,
    AcademyImageGrid,
    EducationImageGrid,
    OnlineGrid, OnlineImageGrid,
    UniversityGrid, UniversityImageGrid
} from "@/atom/molecules/education/EducationStyle";



export const educationImageArray = [
    {
        $area: EducationImageGrid,
        src: '/education.jpg',
        alt: 'education'
    },
    {
        $area: UniversityImageGrid,
        src: '/university.jpg',
        alt: 'university'
    },
    {
        $area: AcademyImageGrid,
        src: '/academy.jpg',
        alt: 'academy'
    },
    {
        $area: OnlineImageGrid,
        src: '/responsibilities.jpg',
        alt: 'online'
    },

]
export const educationArray = [
    {
        index: 0,
        $area: UniversityGrid,
        partTitle:['성결대학교' , '산업경영공학과'],
        content: ['주 / 야간 : 주간' , '학점 : 3.47 / 4.5'],
    },
    {
        index: 1,
        $area: AcademyGrid,
        partTitle:['Java 웹/앱' , '애플리케이션 개발'],
        content: ['2021.11 ~ 2022.04 ( 6개월 )' , 'Springframework 기반 웹 애플리케이션 프로젝트 개발'],

    },
    {
        index: 2,
        $area: OnlineGrid,
        partTitle:['온라인 강의' , '인프런 , 코딩애플'],
        content: [
            '김영한' ,
            'Spring MVC 1 , 2편',
            'Spring 기본 원리 , 고급 원리 , 핵심 원리',
            'Spring DATA JPA , 자바 ORM 표준 JPA 기본편 , Query DSL , 실전! 스프링 부트와 JPA 활용 1, 2',
            '모든 개발자를 위한 HTTP 웹 기본 지식',
            '백기선',
            '이펙티브 자바 완벽 공략 1, 2부',
            '백기선 - GodOfDesignPettern',
            '장수원 - Spring Boot 기반으로 개발하는 Spring Security',
            'Next.js 기반으로 지도 앱 만들기',
            'React.js 시작하기',
            'Next.js App Router 버전',
            'JavaScript ES6 입문'
        ]
    },
]