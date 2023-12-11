import StackFlexListView from "@/atom/atoms/stack/flex/StackFlexListView";
import styled, {keyframes} from "styled-components";
import {displayFlex} from "@/style/theme/common";
import {FrontStackLogoArray} from "@/atom/molecules/stack/LogoArray";
import GridArea from "@/atom/molecules/stack/GridArea";
import StackLogo from "@/atom/atoms/stack/logo/StackLogo";
import React from "react";
import StackGridTitle from "@/atom/atoms/stack/title/StackGridTitle";

const TestKeyframe = ($trans: number) => keyframes`
  0% {
    opacity: 0;
    transform: translateX(-${$trans}%);
  }
  25% {
    opacity: 0;
    transform: translateX(-${$trans/2}%);
  }
  50% {
    opacity: 0.2;
    transform: translateX(-${$trans/4}%);
  }
  75% {
    opacity: 0.5;
    transform: translateX(-${$trans/8}%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const TestStyle = styled.div<{$trans:number}>`
  width: 250px;
  height: 100px;

  ${displayFlex('row' , 'center' , 'center')};
  //position: absolute;
  animation: ${props => TestKeyframe(props?.$trans)} 2s linear normal;
`
const TestLayout = styled.div`
  display: grid;
  grid-template-rows: repeat(3 ,1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`
const TitleStyle = styled.div`
  width: 500px;
  height: 320px;

  margin-right: 60px;
  color: #ffffff;
  ${displayFlex('row' , 'center' , 'center')};
`

export default function StackFlexList() {
    return (
        <StackFlexListView>
            <TitleStyle>
                <StackGridTitle title={'FRONT'}/>
            </TitleStyle>
            <TestLayout>
            {
                FrontStackLogoArray?.length !== 0 &&
                FrontStackLogoArray?.map((value, index) => {
                    return (
                        <TestStyle $trans={(100 * index)}>
                            <StackLogo
                                src={value.src}
                                alt={value.alt}
                                text={value.text}
                            />

                        </TestStyle>
                    )
                })
            }
            </TestLayout>
        </StackFlexListView>
    )
}