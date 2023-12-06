import React from "react";
import styled from "styled-components";

const PartTitleStyle = styled.div`

`

const ContentStyle = styled.div`

`

const EducationTextPartViewStyle = styled.div`
  
`
function EducationContentTextPartView({partTitle , content}: {partTitle: string[] , content: string[]}):React.JSX.Element {
    return (
        <EducationTextPartViewStyle>
            <PartTitleStyle>
                {partTitle}
            </PartTitleStyle>
            <ContentStyle>
                {content}
            </ContentStyle>
        </EducationTextPartViewStyle>
    )
}

export default React.memo(EducationContentTextPartView)