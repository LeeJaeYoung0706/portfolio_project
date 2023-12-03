import ProjectBorderContentSwiperView from "@/atom/molecules/project/border/border_swiper/ContentView";


export default function ProjectBorderContent({children} :ComponentPropsInterface) {
    return (
        <ProjectBorderContentSwiperView  >
            {children}
        </ProjectBorderContentSwiperView>
    )
}