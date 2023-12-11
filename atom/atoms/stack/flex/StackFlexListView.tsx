import React from "react";
import styled from "styled-components";


const StackListFlexStyle = styled.div`
   //position: relative;
  padding: 20px 12vw 80px 12vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

function StackFlexListView( {children} : ComponentPropsInterface):React.JSX.Element {
    return (
        <StackListFlexStyle>
            {children}
        </StackListFlexStyle>
    )
}

export default React.memo(StackFlexListView)