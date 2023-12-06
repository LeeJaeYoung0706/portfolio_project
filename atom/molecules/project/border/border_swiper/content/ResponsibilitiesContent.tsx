'use client'
import ResponsibilitiesContentView
    from "@/atom/molecules/project/border/border_swiper/content/ResponsibilitiesContentView";
import {BorderContentUlStyle} from "@/atom/atoms/project/border/BorderContentStyles";
import BorderContentText from "@/atom/atoms/project/border/BorderContentText";
import React from "react";
import BorderContentReview from "@/atom/atoms/project/border/BorderContentReview";
import ProjectInnerTitle from "@/atom/atoms/project/project_title/ProjectInnerTitle";

/**
 * 슬라이드 스와이퍼 영역 두 번째 페이지
 * @param children
 * @constructor
 */
export default function ResponsibilitiesContent({project}: ContentPropsInterface): React.JSX.Element | null {


    if (project?.responsibilities === undefined || project?.functions === undefined) {
        return null;
    }

    return (
        <ResponsibilitiesContentView>
            {
                <>
                    <ProjectInnerTitle title={'Responsibilities'}/>
                    <BorderContentUlStyle>
                        {
                            project?.responsibilities?.length > 0 &&
                            project?.responsibilities?.map((value, index) => {
                                return <BorderContentText text={value} key={`${index}${value}`}/>
                            })
                        }
                    </BorderContentUlStyle>
                    <ProjectInnerTitle title={'Review'}/>
                    <BorderContentUlStyle>
                        {
                            project?.review !== undefined &&
                            <BorderContentReview review={project?.review}/>
                        }
                    </BorderContentUlStyle>
                </>
            }
        </ResponsibilitiesContentView>
    )
}