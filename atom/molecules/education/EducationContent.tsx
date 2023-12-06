import React from "react";
import EducationContentView from "@/atom/molecules/education/EducationContentView";
import Image from "next/image";
import ImageDiv from "@/atom/atoms/education/ImageDiv";
import EducationContentTextPart from "@/atom/atoms/education/EducationContentTextPart";

/**
 *
 * @param position => true 일 경우 이미지 오른쪽 배치 false 일 경우 왼쪽 배치
 * @constructor
 */
export default function EducationContent({position , partTitle , content , image} : {position: boolean , content: string[] , partTitle: string[] ,image: {src: string , alt: string} }
    ): React.JSX.Element {
    return (
        <EducationContentView>
            {
                position ?
                    <>
                        <EducationContentTextPart
                            partTitle={partTitle}
                            content={content}
                        />
                        <ImageDiv alt={image.alt} src={image.src}/>
                    </>
                :
                    <>
                        <ImageDiv alt={image.alt} src={image.src}/>
                        <EducationContentTextPart
                            partTitle={partTitle}
                            content={content}
                        />
                    </>
            }
        </EducationContentView>
    )
}
