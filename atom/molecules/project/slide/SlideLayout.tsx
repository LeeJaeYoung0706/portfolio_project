import SlideLayoutView from "@/atom/molecules/project/slide/SlideLayoutView";
import React from "react";
import SlideArea, {MinusMarginDiv} from "@/atom/molecules/project/slide/SlideArea";
import {
  FunctionsGrid, FunctionsTitleGrid,
  IntroductionGrid, IntroductionTitleGrid,
  LinkGrid,
  ResponsibilitiesGrid, ResponsibilitiesTitleGrid,
  ReviewGrid, ReviewTitleGrid
} from "@/atom/atoms/project/slide/StyleGridArea";
import ProjectContent from "@/atom/atoms/project/slide/content/ProjectContent";
import ProjectLinkTag from "@/atom/atoms/project/project_title/ProjectLinkTag";
import TitleDiv from "@/atom/atoms/project/slide/content/TitleDiv";

interface SlideLayoutPropsInterface {
  project: ProjectInterface | undefined
}

export default function SlideLayout({project}: SlideLayoutPropsInterface): React.JSX.Element | null {

  if (project?.introductionTitle === undefined ||
    project?.responsibilities === undefined ||
    project?.review === undefined ||
    project?.functions === undefined ||
    project === undefined
  ) return null;


  // position true 왼쪽정렬 false 오른쪽 정렬
  return (
    <SlideLayoutView>
      <SlideArea $area={IntroductionTitleGrid} $checked={true} key={`${project}-1`}>
        <MinusMarginDiv/>
      </SlideArea>
      <SlideArea $area={ResponsibilitiesTitleGrid} $checked={true} key={`${project}-2`}>
        <MinusMarginDiv/>
      </SlideArea>
      <SlideArea $area={ReviewTitleGrid} $checked={true} key={`${project}-3`}>
        <MinusMarginDiv/>
      </SlideArea>
      <SlideArea $area={FunctionsTitleGrid} $checked={true} key={`${project}-4`}>
        <MinusMarginDiv/>
      </SlideArea>

      <SlideArea $area={IntroductionGrid} $checked={false} key={`${project}-${project?.introductionTitle}`}>
        <TitleDiv title={'소개'} position={true} src={'/review.jpg'} alt={'review'}/>
        <ProjectContent
          position={false}
          content={[project?.introductionTitle || '', project?.introduction || '']}
        />
      </SlideArea>
      <SlideArea $area={ResponsibilitiesGrid} $checked={false} key={`${project}-${project?.responsibilities}`}>
        <TitleDiv title={'담당'} position={true} src={'/responsibilities.jpg'} alt={'responsibilities'}/>
        <ProjectContent
          position={true}
          content={project?.responsibilities || []}
        />
      </SlideArea>
      <SlideArea $area={FunctionsGrid} $checked={false} key={`${project}-${project?.functions}`}>
        <TitleDiv title={'기능'} position={true} src={'/review.jpg'} alt={'review'}/>
        <ProjectContent
          position={false}
          content={project?.functions || []}
        />
      </SlideArea>
      <SlideArea $area={ReviewGrid} $checked={false} key={`${project}-${project?.review}`}>
        <TitleDiv title={'후기'} position={true} src={'/review.jpg'} alt={'review'}/>
        <ProjectContent
          position={true}
          content={[project?.review || '']}
        />
      </SlideArea>
      {
        project?.link !== undefined &&
        <ProjectLinkTag link={project?.link} $area={LinkGrid}/>
      }
    </SlideLayoutView>
  )
}