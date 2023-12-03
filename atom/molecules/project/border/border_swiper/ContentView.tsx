import ProjectBorderContent from "@/atom/molecules/project/border/border_swiper/Content";
import React from "react";
import styled from "styled-components";


const BorderContentStyle = styled.div`
  background-color: blueviolet;
  min-height: 500px;
  min-width: 100%;
`

function ProjectBorderContentSwiperView ({children} : ComponentPropsInterface) : React.JSX.Element {
    return (
        <BorderContentStyle>
            {children}
        </BorderContentStyle>
    )
}

export default React.memo(ProjectBorderContentSwiperView)