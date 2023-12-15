import React from "react";
import styled from "styled-components";

const SlideLayoutStyle = styled.div`
  display: grid;
  overflow-x: hidden;
  overflow-y: hidden;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:  'introductionTtile introduction'
                        'introductionTtile introduction'
                        'responsibilities responsibilitiesTitle'
                        'responsibilities responsibilitiesTitle'
                        'functionsTitle functions'
                        'functionsTitle functions'
                        'review reviewTitle'
                        'review reviewTitle'
                        'link link';
  grid-gap: 3px; /* 각 그리드 아이템 사이의 간격 */

  ${(props) => props.theme.media.tablet} {
    grid-template-columns: 1fr;
    grid-template-areas: 'introductionTtile'
                         'introduction'
                         'responsibilitiesTitle'
                         'responsibilities'
                         'functionsTitle'
                         'functions'
                         'reviewTitle'
                         'review'
                         'link';
  }

  ${(props) => props.theme.media.mobile} {
    grid-template-columns: 1fr;
    grid-template-areas: 'introductionTtile'
                         'introduction'
                         'responsibilitiesTitle'
                         'responsibilities'
                         'functionsTitle'
                         'functions'
                         'reviewTitle'
                         'review'
                         'link';
  }
`
function SlideLayoutView({children} : ComponentPropsInterface):React.JSX.Element {
    return (
        <SlideLayoutStyle>
            {children}
        </SlideLayoutStyle>
    )
}

export default React.memo(SlideLayoutView)