'use client'
import ProjectView from "@/atom/organisms/project/ProjectView";
import React from "react";
import SectionTitle from "@/atom/atoms/title/SectionTitle";
import ProjectBorder from "@/atom/molecules/project/border/ProjectBorder";
import {ProjectArticleLayout} from "@/atom/molecules/project/ProjectArticleLayout";


/**
 * Project Container
 * @constructor
 */
export default function Project(): React.JSX.Element {
  return (
    <ProjectView>
      <ProjectArticleLayout>
        <SectionTitle title={'Project'} id={'project'}/>
        <ProjectBorder/>
      </ProjectArticleLayout>
    </ProjectView>
  )
}