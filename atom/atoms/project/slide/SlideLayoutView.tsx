import React from "react";
import styled from "styled-components";

const SlideLayoutStyle = styled.div`
  display: grid;
  overflow-x: hidden;
  grid-template-areas: 'introduction introduction introduction'
                       'responsibilities responsibilities responsibilities'
                       'functions functions functions'
                       'review review review'
;
  grid-gap: 3px; /* 각 그리드 아이템 사이의 간격 */
`
function SlideLayoutView({children} : ComponentPropsInterface):React.JSX.Element {
    return (
        <SlideLayoutStyle>
            {children}
        </SlideLayoutStyle>
    )
}

export default React.memo(SlideLayoutView)