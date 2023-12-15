import React from "react";
import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";


const StackLogoStyle = styled.div`
  ${displayFlex('row', 'flex-start', 'center')}
  width: 100%;
`

/**
 * Stack Logo View
 * @param children
 * @constructor
 */
function StackLogoView({children}: ComponentPropsInterface): React.JSX.Element {
  return (
    <StackLogoStyle>
      {children}
    </StackLogoStyle>
  )
}

export default React.memo(StackLogoView)