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

export default function ProjectBorder() :React.JSX.Element {

    const [project , setProject] = useState<ProjectTitleListInterface[]>(ProjectTitleList);

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
