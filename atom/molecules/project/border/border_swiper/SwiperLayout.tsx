import React from "react";
import styled from "styled-components";


const SwiperLayoutStyle = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;
  line-height: 1;
  box-shadow: 0 10px 20px ${props => props.theme.palette.second}, 0 0 10px ${props => props.theme.palette.middle};
  min-width: 1185px;
  min-height: 800px;

  ${(props) => props.theme.media.tablet} {
    width: 100%;
    min-width: 600px;
  }

  ${(props) => props.theme.media.mobile} {
    width: 100%;
    min-width: 470px;
  }
`

function SwiperLayout ({children} : ComponentPropsInterface): React.JSX.Element {

    return (
        <SwiperLayoutStyle>
            {children}
        </SwiperLayoutStyle>
    )
}

export default React.memo(SwiperLayout)