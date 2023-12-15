import React from "react";
import ProjectContentView from "@/atom/atoms/project/slide/content/ProjectContentView";
import ProjectContentTextPart from "@/atom/atoms/project/slide/content/ProjectContentTextPart";


/**
 *
 * @param position => true 일 경우 이미지 오른쪽 배치 false 일 경우 왼쪽 배치
 * @param partTitle => 파트 별 타이틀
 * @param content => 파트 내 콘텐츠
 * @constructor
 */
export default function ProjectContent({position, content}: ProjectContentPropsInterface
): React.JSX.Element {
  return (
    <ProjectContentView>
      {
        position ?
          <>
            <ProjectContentTextPart
              content={content}
            />
          </>
          :
          <>
            <ProjectContentTextPart
              content={content}
            />
          </>
      }
    </ProjectContentView>
  )
}
