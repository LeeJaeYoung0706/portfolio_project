import React from 'react';
import Link from "next/link";
import styled, {RuleSet} from "styled-components";
import {NGodicFont} from "@/style/font";
import {displayFlex} from "@/style/theme/common";

const LinkOutSideStyle = styled.div<{$area: RuleSet<Object>}>`
  ${props => props.$area};
  width: 100%;
  margin-top: 30px;
  ${displayFlex('row' , 'center' , 'center')};
`

const LinkStyle = styled(Link)`
  text-align: center;
  padding: 30px;
  & > p {
    font-weight: bold;
  }
  color: ${props => props.theme.palette.reverseSecond70};
  background-color: ${props => props.theme.palette.primary70};
  border-radius: 5px;
  margin-top: 100px;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${(props) => props.theme.palette.reverseSecond};
      background-color: ${props => props.theme.palette.primary};
    }
  }

  &:active {
    color: ${(props) => props.theme.palette.reverseSecond};
    background-color: ${props => props.theme.palette.primary};
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
                <p>More Information</p>
            </LinkStyle>
        </LinkOutSideStyle>
    )
}