import React from "react";
import styled from "styled-components";
import Image from "next/image";

const AboutMeIdCardTitleStyle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  min-width: 70px;
`

/**
 * AboutMe Id Title
 * @param children
 * @constructor
 */

function AboutMeIdTitleView({children} : {children: React.ReactNode}): React.JSX.Element{
    return (
        <AboutMeIdCardTitleStyle>
            {children}
        </AboutMeIdCardTitleStyle>
    )
}

export default React.memo(AboutMeIdTitleView);