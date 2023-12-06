import React from "react";
import styled, {css} from "styled-components";
import {displayFlex} from "@/style/theme/common";
import {TitllFont} from "@/style/font";


const SectionTitleStyle = styled.div<{$id: string}>`
  ${displayFlex('row' , 'center' , 'center')}
  ${props => props.$id === 'about_me' && css`display: none`}
`

const SectionTitleText = styled.h1`
  font-size: 5.2em;
  color: ${(props) => props.theme.palette.reverse};
  text-shadow: 0 2px 3px ${(props) => props.theme.palette.reverseSecond};
  line-height: 1;
  padding-bottom: 8vh;
  padding-top: 10px;
  text-transform: uppercase;

  ${(props) => props.theme.media.tablet} {
    font-size: 4.2em;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 3.2em;
  }
`;

/**
 * Section 마다 존재하는 Title View
 */
function SectionTitleView ({title , id } : SectionTitlePropsInterface):React.JSX.Element  {

    return (
        <SectionTitleStyle id={id} $id={id}>
            <SectionTitleText className={TitllFont.className}>{title}</SectionTitleText>
        </SectionTitleStyle>
    )
}

export default React.memo(SectionTitleView)