import React from "react";
import styled, {css} from "styled-components";
import {displayFlex} from "@/style/theme/common";

const HeaderLayoutStyle = styled.header<{ $isTop: boolean  , $checked:  boolean}>`
  position: fixed;
  width: 100%;
  min-height: 130px;
  transition: 0.5s;
  z-index: 100;
  ${displayFlex('row', 'space-between', 'center')}
  flex-wrap: wrap;

  ${(props) => (props.$checked || props.$isTop ) ? css`background-color: ${props.theme.palette.reverse};` : css`background-color: transparent;` }
  box-shadow: ${(props) =>  (props.$checked || props.$isTop ) ? css`0 0 4px 1px ${props.theme.palette.reverseSecond}` : 'none' };
`

function HeaderView({children, isTop , checked}: HeaderPropsInterface): React.JSX.Element {
    return (
        <HeaderLayoutStyle $isTop={isTop} $checked={checked}>
            {children}
        </HeaderLayoutStyle>
    )
}

export default React.memo(HeaderView)