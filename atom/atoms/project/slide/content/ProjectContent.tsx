import React from "react";
import ImageDiv from "@/atom/atoms/education/ImageDiv";
import EducationContentTextPart from "@/atom/atoms/education/EducationContentTextPart";
import ProjectContentView from "@/atom/atoms/project/slide/content/ProjectContentView";
import ProjectContentTextPart from "@/atom/atoms/project/slide/content/ProjectContentTextPart";

/**
 *
 * @param position => true 일 경우 이미지 오른쪽 배치 false 일 경우 왼쪽 배치
 * @constructor
 */
export default function ProjectContent({position , partTitle , content , image} : {position: boolean , content: string[] , partTitle: string ,image: {src: string , alt: string} }
    ): React.JSX.Element {
    return (
        <ProjectContentView>
            {
                position ?
                    <>
                        <ProjectContentTextPart
                            partTitle={partTitle}
                            content={content}
                        />
                        <ImageDiv alt={image.alt} src={image.src}/>
                    </>
                :
                    <>
                        <ImageDiv alt={image.alt} src={image.src}/>
                        <ProjectContentTextPart
                            partTitle={partTitle}
                            content={content}
                        />
                    </>
            }
        </ProjectContentView>
    )
}
