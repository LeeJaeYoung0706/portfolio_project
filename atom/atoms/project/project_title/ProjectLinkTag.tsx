import React from 'react';
import Link from "next/link";
import styled, {keyframes} from "styled-components";
import {NGodicFont, TitllFont} from "@/style/font";


const ClickAnimation = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`

const LinkStyle = styled(Link)`
 
  text-align: center;
  padding: 20px;  
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: bold;
  color: ${props => props.theme.palette.middle};
  background-color: ${props => props.theme.palette.second};
  border-radius: 5px;
  

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${(props) => props.theme.palette.second};
      background-color: ${props => props.theme.palette.middle};
    }
  }

  &:active {
    color: ${(props) => props.theme.palette.second};
    background-color: ${props => props.theme.palette.middle};
  }
`
/**
 * 관련 링크 바로가기
 * @param link
 * @constructor
 */
export default function ProjectLinkTag({link}: { link: string }) {
    return (
        <LinkStyle href={link}
                   target="_blank"
                   rel="noopener noreferrer"
                   className={NGodicFont.className}
        ><p>More Information</p></LinkStyle>
    )
}