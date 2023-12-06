import ProjectBorderContentSwiperView from "@/atom/molecules/project/border/border_swiper/content/ContentView";

/**
 * 슬라이드 스와이퍼 영역 레이아웃 Container
 * @param children
 * @constructor
 */
export default function ProjectBorderContent({children} :ComponentPropsInterface) {
    return (
        <ProjectBorderContentSwiperView>
            {children}
        </ProjectBorderContentSwiperView>
    )
}