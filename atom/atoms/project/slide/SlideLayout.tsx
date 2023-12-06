import SlideLayoutView from "@/atom/atoms/project/slide/SlideLayoutView";
import XArea from "@/atom/molecules/education/XArea";
import EducationContent from "@/atom/molecules/education/EducationContent";
import React from "react";
import SlideArea from "@/atom/atoms/project/slide/SlideArea";
import {FunctionsGrid, IntroductionGrid, ResponsibilitiesGrid, ReviewGrid} from "@/atom/atoms/project/slide/style";
import ProjectContent from "@/atom/atoms/project/slide/content/ProjectContent";
import ProjectLinkTag from "@/atom/atoms/project/project_title/ProjectLinkTag";

interface SlideLayoutPropsInterface {
    project: ProjectInterface | undefined
}
export default function SlideLayout( {project} : SlideLayoutPropsInterface): React.JSX.Element | null {

    if (project?.introductionTitle === undefined ||
        project?.responsibilities === undefined ||
        project?.review === undefined ||
        project?.functions === undefined ||
        project === undefined
    ) return null;

    return (
        <SlideLayoutView>
            {
                <SlideArea $area={IntroductionGrid} $checked={project?.checked || false} key={`${project}-${project?.introductionTitle}`}>
                    <ProjectContent
                        position={true}
                        content={[project?.introductionTitle || '' , project?.introduction || '']}
                        partTitle={'소개'}
                        image={{src: '/project_intro.jpg' , alt: 'project_introduction'}}
                    />
                </SlideArea>
            },
            {
                <SlideArea $area={ResponsibilitiesGrid} $checked={project?.checked || false} key={`${project}-${project?.responsibilities}`}>
                    <ProjectContent
                        position={false}
                        content={project?.responsibilities || []}
                        partTitle={'담당'}
                        image={{src: '/responsibilities.jpg' , alt: 'project_responsibilities'}}
                    />
                </SlideArea>
            },
            {
                <SlideArea $area={FunctionsGrid} $checked={project?.checked || false} key={`${project}-${project?.functions}`}>
                    <ProjectContent
                        position={true}
                        content={project?.functions || []}
                        partTitle={'주요 기능'}
                        image={{src: '/functions.jpg' , alt: 'project_functions'}}
                    />
                </SlideArea>
            },
            {
                <SlideArea $area={ReviewGrid} $checked={project?.checked || false} key={`${project}-${project?.review}`}>
                    <ProjectContent
                        position={false}
                        content={[project?.review || '']}
                        partTitle={'후기'}
                        image={{src: '/review.jpg' , alt: 'project_review'}}
                    />
                </SlideArea>
            },
            {
                project?.link !== undefined &&
                <ProjectLinkTag link={project?.link} />
            }
        </SlideLayoutView>
    )
}