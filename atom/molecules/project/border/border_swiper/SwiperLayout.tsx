import React from "react";
import styled from "styled-components";


const SwiperLayoutStyle = styled.div`
  width: 100%;
  border: 1px solid #d5132c;
  position: relative;
  overflow-x: hidden;
`

function SwiperLayout ({children} : ComponentPropsInterface): React.JSX.Element {
    return (
        <SwiperLayoutStyle>
            {children}
        </SwiperLayoutStyle>
    )
}

export default React.memo(SwiperLayout)