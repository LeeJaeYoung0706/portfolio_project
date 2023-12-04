import React from "react";
import styled from "styled-components";


const First_IntroContentViewStyle = styled.div`

`

function IntroContentView ({children} : any) : React.JSX.Element {
    return (
        <First_IntroContentViewStyle>
            {children}
        </First_IntroContentViewStyle>
    )
}

export default React.memo(IntroContentView)