import React from "react";
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";


const ErrorStyle = styled.section`
  ${displayFlex('row', 'center', 'center')};
  min-height: 100vh;
`

const BoxStyle = styled.article`
  position: relative;
  width: 390px;
  height: 390px;
  border-radius: 7px;
  background-color: ${props => props.theme.palette.second70};
`
const FormStyle = styled.article`
  position: absolute;
  padding: 50px 30px;
  inset: 4px;
  border-radius: 7px;
  z-index: 350;
  ${displayFlex('column', 'space-around', 'center')};;
  background-color: ${props => props.theme.palette.reverse};
  gap: 10px;
`

function ErrorSectionView({children}: ComponentPropsInterface): React.JSX.Element {
  return (
    <ErrorStyle>
      <BoxStyle>
        <FormStyle>
          {children}
        </FormStyle>
      </BoxStyle>
    </ErrorStyle>
  )
}

export default React.memo(ErrorSectionView);