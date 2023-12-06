import React from "react";
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";


const EducationContentViewStyle = styled.div`
    ${displayFlex("row" , "space-between" , "center")};
  width: 100%;
`

function EducationContentView({children} : ComponentPropsInterface):React.JSX.Element {
    return (
        <EducationContentViewStyle>
            {children}
        </EducationContentViewStyle>
    )
}

export default React.memo(EducationContentView)