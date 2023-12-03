'use client'
import React, {useCallback, useEffect, useState} from "react";
import ProjectBorderView from "@/atom/molecules/project/border/ProjectBorderView";
import ProjectTitleUlView from "@/atom/molecules/project/project_title/ProjectTitleUlView";
import ProjectTitleLi from "@/atom/atoms/project/project_title/ProjectTitleLi";
import ProjectHighLightTitle from "@/atom/atoms/project/project_title/ProjectHighLightTitle";
import {initProjectTitleList} from "@/atom/molecules/project/border/ProjectTitleDescription";
import SwiperLayout from "@/atom/molecules/project/border/border_swiper/SwiperLayout";
import ProjectBorderContent from "@/atom/molecules/project/border/border_swiper/Content";
import ContentLayout from "@/atom/molecules/project/border/border_swiper/ContentLayout";
import ProjectContentSwiper from "@/atom/molecules/project/border/border_swiper/SwiperContainer";


/**
 * Project Container
 * @constructor
 */
export default function ProjectBorder() :React.JSX.Element {
    // Project Title 선택시 Flex 효과로 범위 주기 위해서 생성
    const [project , setProject] = useState<ProjectTitleListInterface[]>(initProjectTitleList);
    // project state 넘기는 핸들러
    const projectCheckHandler = useCallback( (check: ProjectTitleListInterface) => {
        setProject( (pre) => {
            const copy = [...pre];
            return copy.map( (value) => {
                if (value.title === check.title)
                    return {
                        ...value,
                        checked: check.checked,
                    }
                else
                    return {
                        ...value,
                        checked: false
                    }
            })
        })

    } , [project])

    // Title Select
    const [checked , setChecked] = useState(false);
    useEffect(() => {
        const result = project?.filter( (value) => value.checked);
        setChecked( () => result?.length > 0)
    }, [project]);

    return (
        <ProjectBorderView>
            <ProjectTitleUlView>
                {
                    project?.length > 0 &&
                    project?.map( (value , index) => {
                        return <ProjectTitleLi project={value} projectCheckHandler={projectCheckHandler} key={`${index}${value.title}`} />
                    })
                }
            </ProjectTitleUlView>
            {
                checked &&
                <ProjectHighLightTitle project={project?.filter((value) => value.checked)?.pop()}/>
            }
            <ProjectContentSwiper />
        </ProjectBorderView>
    )
}
