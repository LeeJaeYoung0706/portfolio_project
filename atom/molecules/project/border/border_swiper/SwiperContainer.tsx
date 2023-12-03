import SwiperLayout from "@/atom/molecules/project/border/border_swiper/SwiperLayout";
import ContentTransformLayout from "@/atom/molecules/project/border/border_swiper/ContentLayout";
import ProjectBorderContent from "@/atom/molecules/project/border/border_swiper/Content";
import React, {useCallback, useRef, useState} from "react";
import ContentChangeButton from "@/atom/atoms/project/border/ContentChangeButton";
import {css} from "styled-components";

interface ProjectContentSwiper {
    project: ProjectTitleListInterface | undefined
}

export default function ProjectContentSwiper ({project} : ProjectContentSwiper) {

    const ref = useRef<HTMLDivElement>(null)
    const testArray = [
        'test1' , 'test2' , 'test3'
    ]
    const projectInitState = {
        index: 0,
        $transform: css`transform: translate(0)`
    }

    const [projectIndex, setProjectIndex] = useState(projectInitState);
    const [touch, setTouch] = useState({
        start: 0,
        end: 0,
    });

    const projectIndexHandler = useCallback( (plus: boolean) => {
        if (plus) {
            setProjectIndex( (pre) => {
                const cal = pre?.index + 1;
                const result = cal >= testArray?.length ? testArray?.length - 1 : cal;
                return {
                    index: result,
                    $transform: css`transform: translate(${result === 0 ? 0 : `-${result}00%` })`
                }
            })
        } else {
            setProjectIndex( (pre) => {
                const cal = pre.index - 1;
                const result = cal <= 0 ? 0 : cal;
                return{
                    index: result,
                    $transform: css`transform: translate(${result === 0 ? 0 : `-${result}00%` })`
                }
            })
        }
    }, [projectIndex])


    const touchStart = useCallback( (e: React.TouchEvent) => {
        setTouch({
            ...touch,
            start: e.touches[0].pageX,
        });
    } , [touch])

    const touchMove = useCallback( (e: React.TouchEvent) => {
        if (ref?.current) {
            const current = ref.current.clientWidth * projectIndex.index;
            const result = -current + (e.targetTouches[0].pageX - touch.start);
            setProjectIndex( (pre) => {
                return{
                    ...pre,
                    $transform: css`transform: translate3d(${result === 0 ? 0 : `${result}px , 0px ,0px`  }); transition: 0ms;`
                }
            })
        }
    } , [touch])

    const touchEnd =  useCallback( (e: React.TouchEvent) => {
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
    } , [touch])

    return (
        <SwiperLayout>
            <ContentChangeButton
                onClick={ () => projectIndexHandler(false)}
                position={'back'}
            />
            <ContentChangeButton
                onClick={ () => projectIndexHandler(true)}
                position={'forward'}
            />
            <ContentTransformLayout
                projectIndex={projectIndex}
                ref={ref}
                touchMove={touchMove}
                touchEnd={touchEnd}
                touchStart={touchStart}
            >
                <ProjectBorderContent>
                    test1
                </ProjectBorderContent>
                <ProjectBorderContent>
                    test2
                </ProjectBorderContent>
                <ProjectBorderContent>
                    test3
                </ProjectBorderContent>
            </ContentTransformLayout>
        </SwiperLayout>
    )
}