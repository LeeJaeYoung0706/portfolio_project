'use client'
import React, {useCallback, useState} from "react";
import ProjectBorderView from "@/atom/molecules/project/border/ProjectBorderView";
import ProjectTitleUlView from "@/atom/molecules/project/project_title/ProjectTitleUlView";
import ProjectTitleLi from "@/atom/atoms/project/project_title/ProjectTitleLi";


const ProjectTitleList = [
    {
        title: 'IDTHUB',
        checked: false
    },
    {
        title: 'Chacarda',
        checked: false
    },
    {
        title: 'LucyMax',
        checked: false
    },
    {
        title: 'Bigaza',
        checked: false
    },
    {
        title: 'ERSolution',
        checked: false
    },
    {
        title: 'ToyProject',
        checked: false
    },
]

/**
 * Project Container
 * @constructor
 */
export default function ProjectBorder() :React.JSX.Element {
    // Project Title 선택시 Flex 효과로 범위 주기 위해서 생성
    const [project , setProject] = useState<ProjectTitleListInterface[]>(ProjectTitleList);
    // project state 넘기는 핸들러
    const projectCheckHandler = useCallback( (check: ProjectTitleListInterface) => {
        setProject( (pre) => {
            const copy = [...pre];
            return copy.map( (value) => {
                if (value.title === check.title)
                    return {
                        title: value.title,
                        checked: check.checked
                    }
                else
                    return {
                        title: value.title,
                        checked: false
                    }
            })
        })

    } , [project])

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
        </ProjectBorderView>
    )
}
