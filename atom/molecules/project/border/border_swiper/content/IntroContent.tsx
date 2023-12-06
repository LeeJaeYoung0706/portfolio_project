import IntroContentView from "@/atom/molecules/project/border/border_swiper/content/IntroContentView";
import BorderContentText from "@/atom/atoms/project/border/BorderContentText";
import {BorderContentUlStyle} from "@/atom/atoms/project/border/BorderContentStyles";
import ProjectInnerTitle from "@/atom/atoms/project/project_title/ProjectInnerTitle";
import React from "react";




/**
 * 슬라이드 스와이퍼 영역 첫 번째 페이지
 * @param children
 * @constructor
 */
export default function IntroContent({project}: ContentPropsInterface): React.JSX.Element | null{

    if (project?.functions === undefined || project?.introductionTitle === undefined || project?.introduction === undefined) {
        return null;
    }

    return (
        <IntroContentView>
            <ProjectInnerTitle title={'Introduction'}/>
            <BorderContentUlStyle>
                <BorderContentText text={project?.introductionTitle}/>
                <BorderContentText text={project?.introduction}/>
            </BorderContentUlStyle>
            <ProjectInnerTitle title={'Function'}/>
            <BorderContentUlStyle>
                {
                    project?.functions?.length > 0 &&
                    project?.functions?.map((value, index) => {
                        return <BorderContentText text={value} key={`${index}${value}`}/>
                    })
                }
            </BorderContentUlStyle>
        </IntroContentView>
    )
}