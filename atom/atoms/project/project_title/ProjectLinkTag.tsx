import React from 'react';
import Link from "next/link";
import styled, {RuleSet} from "styled-components";
import {NGodicFont} from "@/style/font";
import {ContentFontSizeMobile, ContentFontSizePC, ContentFontSizeTablet, displayFlex} from "@/style/theme/common";

const LinkOutSideStyle = styled.div<{$area: RuleSet<Object>}>`
  ${props => props.$area};
  width: 100%;
  margin-top: 230px;
  ${displayFlex('row' , 'center' , 'center')};
`

const LinkStyle = styled(Link)`
  text-align: center;
  padding: 30px;
  ${ContentFontSizePC};
  background-color: ${props => props.theme.palette.reverse70};
  border-bottom: 1px solid  ${props => props.theme.palette.second};
  border-top: 1px solid  ${props => props.theme.palette.second};
  color: ${(props) => props.theme.palette.second};

  
  & > p {
    font-weight: bold;
  }


  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${(props) => props.theme.palette.reverseSecond};
      background-color: ${props => props.theme.palette.reverse};
      //opacity: 0.9;
    }
  }

  ${(props) => props.theme.media.tablet} {
    max-width: 200px;
    ${ContentFontSizeTablet};

    &:active {
      color: ${(props) => props.theme.palette.reverseSecond};
      background-color: ${props => props.theme.palette.reverse};
      opacity: 0.9;
    }
  }

  ${(props) => props.theme.media.mobile} {
    max-width: 200px;
    ${ContentFontSizeMobile};

    &:active {
      color: ${(props) => props.theme.palette.middle};
      background-color: ${props => props.theme.palette.primary};
      opacity: 0.9;
    }
  }
`
/**
 * 관련 링크 바로가기
 * @param link => route
 * @param $area => 그리드 area 지정
 * @constructor
 */
export default function ProjectLinkTag({link , $area}: ProjectLinkTagInterface) {
    return (
        <LinkOutSideStyle $area={$area}>
            <LinkStyle href={link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className={NGodicFont.className}
            >
                <p>READ MORE&nbsp;&nbsp; &gt;</p>
            </LinkStyle>
        </LinkOutSideStyle>
    )
}