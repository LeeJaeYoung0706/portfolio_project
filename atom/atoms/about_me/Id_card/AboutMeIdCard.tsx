import React from "react";
import AboutMeIdCardView from "@/atom/atoms/about_me/Id_card/AboutMeIdCardView";
import styled from "styled-components";
import {OrbitFont} from "@/style/font";
import AboutMeIdTitle from "@/atom/atoms/about_me/Id_card/AboutMeIdTitle";


export const AboutMeIdCardContent = styled.p`
 
  font-size: 1.4em;
  color: ${(props => props.theme.palette.second)};
  background-color: transparent;
  padding-bottom: 50px;

  ${(props) => props.theme.media.tablet} {
    font-size: 1.4em;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 1.2em;
  }
  
  & a:hover {
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: ${(props) => props.theme.palette.reverseSecond};
      }
    }
  }

  & a:active {
    color: ${(props) => props.theme.palette.reverseSecond};
    opacity: 0.9; 
  }
`

/**
 * About Me Id Card 전체
 * @param title
 * @param content
 * @param imageUrl
 * @constructor
 */
export default function AboutMeIdCard ( {title , content , imageUrl} : AboutMeIdCardPropsInterface): React.JSX.Element {
    return (
        <AboutMeIdCardView>
            <AboutMeIdTitle font={OrbitFont.className} title={title} imageUrl={imageUrl}/>
            <AboutMeIdCardContent className={OrbitFont.className} dangerouslySetInnerHTML={{ __html: content}}></AboutMeIdCardContent>
        </AboutMeIdCardView>
    )
}

