'use client'
import React, {useCallback, useEffect, useState} from "react";
import ProjectBorderView from "@/atom/molecules/project/border/ProjectBorderView";
import ProjectTitleUlView from "@/atom/molecules/project/project_title/ProjectTitleUlView";
import ProjectTitleLi from "@/atom/atoms/project/project_title/ProjectTitleLi";
import ProjectHighLightTitle from "@/atom/atoms/project/project_title/ProjectHighLightTitle";
import InitSwiperContent from "@/atom/molecules/project/border/InitSwiperContent";
import {initProjectList} from "@/atom/organisms/project/ProjectTitleDescription";
import SlideLayout from "@/atom/molecules/project/slide/SlideLayout";


/**
 * Project Container
 * @constructor
 */
export default function ProjectBorder(): React.JSX.Element {
  // Project Title 선택시 Flex 효과로 범위 주기 위해서 생성
  const [project, setProject] = useState<ProjectInterface[]>(initProjectList);
  // project state 넘기는 핸들러
  const projectCheckHandler = useCallback((project: ProjectInterface) => {

    if (!project.checked)
      return false;

    setProject((pre) => {
      const copy = [...pre];
      return copy.map((value) => {
        if (value.title === project.title)
          return {
            ...value,
            checked: project.checked,
          }
        else
          return {
            ...value,
            checked: false
          }
      })
    })

  }, [project])

  // Title Select
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const result = project?.filter((value) => value.checked);
    setChecked(() => result?.length > 0)
  }, [project]);

  // Check 시 list 에서 pop
  const selectProject = () => {
    const copy = [...project];
    return copy?.filter((project) => project.checked)?.pop()
  }

  return (
    <ProjectBorderView>
      <ProjectTitleUlView>
        {
          project?.length > 0 &&
          project?.map((value, index) => {
            return <ProjectTitleLi project={value} projectCheckHandler={projectCheckHandler}
                                   key={`${index}${value.title}`}/>
          })
        }
      </ProjectTitleUlView>
      {
        checked ?
          <>
            <ProjectHighLightTitle project={selectProject()}/>
            <SlideLayout project={selectProject()}/>
          </> :
          <>
            <InitSwiperContent onCheckHandler={() => projectCheckHandler(
              {
                ...project[0],
                checked: true
              }
            )}/>
          </>
      }

    </ProjectBorderView>
  )
}
