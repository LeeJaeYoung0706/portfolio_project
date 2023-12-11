import React from "react";
import styled, {css} from "styled-components";
import {displayFlex} from "@/style/theme/common";
import {NotoSansFont, RussoFont, TitllFont} from "@/style/font";


const SectionTitleStyle = styled.div<{$id: string}>`
  ${displayFlex('row' , 'center' , 'flex-end')}
`

const SectionTitleText = styled.h1<{$first: boolean}>`

  color: ${(props) => props.$first ? props.theme.palette.reverse : props.theme.palette.primary};
  ${(props) => props.$first ? 
          css`
            text-shadow: -1px 0px ${props.theme.palette.primary},
            0px 1px ${props.theme.palette.primary},
            1px 0px ${props.theme.palette.primary},
              0px -1px ${props.theme.palette.primary};
            font-size: 90px;
            padding-right: 5px;
          ` : css`font-size: 80px;`};
  line-height: 1;
  padding-bottom: 150px;
  padding-top: 100px;
  text-transform: uppercase;
  font-weight: bold;
  ${(props) => props.theme.media.tablet} {
    font-size: 72px;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 54px;
  }
`;

/**
 * Section 마다 존재하는 Title Container
 * @param title title String
 * @param id
 * @constructor
 */
function SectionTitleView ({title , id } : SectionTitleViewPropsInterface):React.JSX.Element  {

    return (
        <SectionTitleStyle id={id} $id={id}>
            <SectionTitleText className={RussoFont.className} $first={true}>{title.first}</SectionTitleText>
            <SectionTitleText className={RussoFont.className} $first={false}>{title.other}</SectionTitleText>
        </SectionTitleStyle>
    )
}

export default React.memo(SectionTitleView)