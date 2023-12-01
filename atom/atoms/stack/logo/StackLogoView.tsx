import React from "react";
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";


const StackLogoStyle = styled.div`
  ${displayFlex('row', 'space-between', 'stretch')}
  width: 100%;
`

function StackLogoView({children}: ComponentPropsInterface): React.JSX.Element {
    return (
        <StackLogoStyle>
            {children}
        </StackLogoStyle>
    )
}

export default React.memo(StackLogoView)