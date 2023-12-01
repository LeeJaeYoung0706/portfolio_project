import ProjectTitleLiView from "@/atom/atoms/project/project_title/ProjectTitleLiView";
import React, {useCallback, useEffect, useState} from "react";

/**
 * Project Title Li Container
 * @param children
 * @constructor
 */
export default function ProjectTitleLi({project , projectCheckHandler} : ProjectTitleLiInterface):React.JSX.Element{

    return (
        <ProjectTitleLiView title={project.title}  checked={project.checked} liOnClick={() => projectCheckHandler({title: project.title , checked: !project.checked})}/>
    )
}