import ProjectBorderContent from "@/atom/molecules/project/border/border_swiper/content/Content";
import React from "react";
import styled from "styled-components";


const BorderContentStyle = styled.div`
  min-height: 100%;
  min-width: 100%;
  padding: 70px;
  box-sizing: border-box;
`

function ProjectBorderContentSwiperView ({children} : ComponentPropsInterface) : React.JSX.Element {
    return (
        <BorderContentStyle>
            {children}
        </BorderContentStyle>
    )
}

export default React.memo(ProjectBorderContentSwiperView)