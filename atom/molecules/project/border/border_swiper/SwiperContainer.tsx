import SwiperLayout from "@/atom/molecules/project/border/border_swiper/SwiperLayout";
import ContentTransformLayout from "@/atom/molecules/project/border/border_swiper/ContentLayout";
import ProjectBorderContent from "@/atom/molecules/project/border/border_swiper/content/Content";
import React, {useCallback, useEffect, useRef, useState} from "react";
import ContentChangeButton from "@/atom/atoms/project/border/ContentChangeButton";
import {css} from "styled-components";
import IntroContent from "@/atom/molecules/project/border/border_swiper/content/IntroContent";
import ResponsibilitiesContent from "@/atom/molecules/project/border/border_swiper/content/ResponsibilitiesContent";
import ProjectInnerTitle from "@/atom/atoms/project/project_title/ProjectInnerTitle";


interface ProjectContentSwiper {
    project: ProjectInterface | undefined
}

export default function ProjectContentSwiper({project}: ProjectContentSwiper) {

    const ref = useRef<HTMLDivElement>(null)
    const arrayLength =  2;
    // 이동 거리
    const projectInitState = {
        index: 0,
        $transform: css`transform: translate(0)`
    }
    // 선택한 프로젝트
    const [selectProject, setSelectProject] = useState(projectInitState);
    // 모바일에서 사용할 State
    const [touch, setTouch] = useState({
        start: 0,
        end: 0,
    });

    //초기화
    useEffect(() => {
        setSelectProject(() => projectInitState)
    }, [project]);
    /**
     * 옆으로 버튼 handler
     */
    const projectIndexHandler = useCallback((plus: boolean) => {
        if (plus) {
            setSelectProject((pre) => {
                const cal = pre?.index + 1;
                const result = cal >= arrayLength ? arrayLength - 1 : cal;
                return {
                    index: result,
                    $transform: css`transform: translate(${result === 0 ? 0 : `-${result}00%`})`
                }
            })
        } else {
            setSelectProject((pre) => {
                const cal = pre.index - 1;
                const result = cal <= 0 ? 0 : cal;
                return {
                    index: result,
                    $transform: css`transform: translate(${result === 0 ? 0 : `-${result}00%`})`
                }
            })
        }
    }, [selectProject])


    /**
     * Mobile 부분 Slide Handler
     */
    const touchStart = useCallback((e: React.TouchEvent) => {
        const target = e.target as HTMLElement;
        if (target?.tagName === 'BUTTON')
            return false;

        setTouch({
            ...touch,
            start: e.touches[0].pageX,
        });
    }, [touch])
    
    const touchMove = useCallback((e: React.TouchEvent) => {

        const target = e.target as HTMLElement;
        if (target?.tagName === 'BUTTON')
            return false;

        if (ref?.current) {
            const current = ref.current.clientWidth * selectProject.index;
            const result = -current + (e.targetTouches[0].pageX - touch.start);
            setSelectProject((pre) => {
                return {
                    ...pre,
                    $transform: css`transform: translate3d(${result === 0 ? 0 : `${result}px , 0px ,0px`});
                      transition: 0ms;`
                }
            })
        }
    }, [touch])

    const touchEnd = useCallback((e: React.TouchEvent) => {

        const target = e.target as HTMLElement;
        if (target?.tagName === 'BUTTON')
            return false;

        const end = e.changedTouches[0].pageX;
        if (touch.start > end) {
            projectIndexHandler(true)
        } else {
            projectIndexHandler(false)
        }
        setTouch({
            ...touch,
            end,
        });
    }, [touch])

    if (project === undefined) {
        return null;
    }

    return (
        <SwiperLayout>
            <ContentChangeButton
                onClick={() => projectIndexHandler(false)}
                position={'back'}
            />
            <ContentChangeButton
                onClick={() => projectIndexHandler(true)}
                position={'forward'}
            />
            <ContentTransformLayout
                projectIndex={selectProject}
                ref={ref}
                touchMove={touchMove}
                touchEnd={touchEnd}
                touchStart={touchStart}
            >
                <ProjectBorderContent>
                    <IntroContent project={project}/>
                </ProjectBorderContent>
                <ProjectBorderContent>
                    <ResponsibilitiesContent project={project}/>
                </ProjectBorderContent>
            </ContentTransformLayout>
        </SwiperLayout>
    )
}