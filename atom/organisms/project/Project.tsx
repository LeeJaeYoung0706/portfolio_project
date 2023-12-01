'use client'
import ProjectView from "@/atom/organisms/project/ProjectView";
import React from "react";
import SectionTitle from "@/atom/atoms/title/SectionTitle";
import ProjectBorder from "@/atom/molecules/project/border/ProjectBorder";

export default function Project():React.JSX.Element {
    return (
        <ProjectView>
            <SectionTitle title={'Project'} id={'project'} />
            <ProjectBorder />
        </ProjectView>
    )
}