import ProjectTitleLiView from "@/atom/atoms/project/project_title/ProjectTitleLiView";
import React from "react";


interface ProjectTitleLiInterface {
    project: ProjectInterface
    projectCheckHandler: (check: ProjectTitleListInterface) => void
}

/**
 * Project Title Li Container
 * @param children
 * @constructor
 */
export default function ProjectTitleLi({project , projectCheckHandler} : ProjectTitleLiInterface):React.JSX.Element{

    return (
        <ProjectTitleLiView
            title={project.title}
            checked={project.checked}
            liOnClick={() => projectCheckHandler({...project , checked: !project.checked})}
        />
    )
}