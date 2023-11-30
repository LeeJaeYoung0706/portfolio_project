import React from "react";
import styled, {css} from "styled-components";
import {displayFlex} from "@/style/theme/common";

const HeaderLayoutStyle = styled.header<{ $isTop: boolean }>`
  position: fixed;
  width: 100%;
  min-height: 130px;
  transition: 0.5s;
  z-index: 100;
  ${displayFlex('row', 'space-between', 'center')}
  flex-wrap: wrap;

  ${(props) => !props.$isTop ? css`background-color: transparent;` : `background-color: ${props.theme.palette.reverse};`}
  box-shadow: ${(props) => !props.$isTop ? 'none' : ` 0 0 4px 1px ${props.theme.palette.reverseSecond}`};
`

function HeaderView({children, isTop}: HeaderPropsInterface): React.JSX.Element {
    return (
        <HeaderLayoutStyle $isTop={isTop}>
            {children}
        </HeaderLayoutStyle>
    )
}

export default React.memo(HeaderView)