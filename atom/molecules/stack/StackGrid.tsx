import StackGridView from "@/atom/molecules/stack/StackGridView";
import React, {useEffect, useRef, useState} from "react";
import styled, {css, keyframes, RuleSet} from "styled-components";
import StackLogo from "@/atom/atoms/stack/logo/StackLogo";
import GridArea from "@/atom/molecules/stack/GridArea";
import {useAppSelector} from "@/lib/redux/hooks";
import {leftGridAnimation, rightGridAnimation} from "@/style/animation";
import {displayFlex} from "@/style/theme/common";
import {BackStackLogoArray, EtcStackLogoArray, FrontStackLogoArray} from "@/atom/molecules/stack/LogoArray";
import StackGridTitle from "@/atom/atoms/stack/title/StackGridTitle";






const commonCSS = css`
  border-radius: 1%;
  padding: 50px;
`

const YArea = styled.div<{$stackVisible: boolean}>`
  gap: 50px;
  grid-area: front;
  ${displayFlex('column', 'center', 'center')}
  ${commonCSS}
  ${(props) => props.$stackVisible && css`animation: ${leftGridAnimation} 1s normal linear;`}
  box-shadow: 0 10px 20px ${props => props.theme.palette.reverse}, 0 0 10px ${props => props.theme.palette.reverseSecond};
  
  ${(props) => props.theme.media.tablet} {
    width: 100%;
  }

  ${(props) => props.theme.media.mobile} {
    width: 100%;
  }
`


const BackArea = styled.div<{$stackVisible: boolean }>`
  grid-area: back;
  gap: 50px;
  ${displayFlex('row', 'center', 'center' , 'flex' , true)}
  align-content: flex-start;
  ${commonCSS};
  box-shadow: 0 10px 20px ${props => props.theme.palette.middle}, 0 0 10px ${props => props.theme.palette.second};
  ${ (props) => props.$stackVisible && css`animation: ${rightGridAnimation} 1.4s normal linear;`}

  ${(props) => props.theme.media.tablet} {
    width: 100%;
    ${displayFlex('column', 'center', 'center')}
  }

  ${(props) => props.theme.media.mobile} {
    width: 100%;
    ${displayFlex('column', 'center', 'center')}
  }

`
const EtcArea = styled.div<{$stackVisible: boolean}>`
  grid-area: etc;
  gap: 50px;
 
  ${displayFlex('row', 'center', 'center' , 'flex' , true)}
  ${commonCSS};
  ${ (props) => props.$stackVisible && css`animation: ${rightGridAnimation} 1.7s normal linear;`}
  box-shadow: 0 10px 20px ${props => props.theme.palette.second}, 0 0 10px ${props => props.theme.palette.middle};

  ${(props) => props.theme.media.tablet} {
    width: 100%;
    ${displayFlex('column', 'center', 'center')}
  }

  ${(props) => props.theme.media.mobile} {
    width: 100%;
    ${displayFlex('column', 'center', 'center')}
  }
`

const AreaEtc = css`
  grid-area: other;
  box-shadow: 0 10px 20px ${props => props.theme.palette.middle}, 0 0 10px ${props => props.theme.palette.second};
`

const AreaBack = css`
  grid-area: back;
  box-shadow: 0 10px 20px ${props => props.theme.palette.second}, 0 0 10px ${props => props.theme.palette.middle};
`

const XArea = styled.div<{$stackVisible: boolean , $area: RuleSet<Object> , $ani_sec : string}>`
  ${props => props.$area};
  gap: 50px;
  ${displayFlex('row', 'center', 'center' , 'flex' , true)}
  align-content: flex-start;
  ${commonCSS};
  ${ (props) => props.$stackVisible && css`animation: ${rightGridAnimation} ${props.$ani_sec} normal linear;`}

  ${(props) => props.theme.media.tablet} {
    width: 100%;
    ${displayFlex('column', 'center', 'center')}
  }

  ${(props) => props.theme.media.mobile} {
    width: 100%;
    ${displayFlex('column', 'center', 'center')}
  }

`

export default function StackGrid():React.JSX.Element {

    const {targetId , visible} = useAppSelector((state) => state.targetSlice);
    const [stackVisible , setStackVisible] = useState(false);

    useEffect(() => {
        if(targetId === 'stack') {
            if (!stackVisible)
                setStackVisible( () => visible)
        }
    }, [targetId , visible]);


    return (
        <StackGridView>
            <YArea $stackVisible={stackVisible}>
                <StackGridTitle title={'Front'}/>
                {
                    FrontStackLogoArray?.length !== 0 &&
                    FrontStackLogoArray?.map( (value , index) => {
                        return (
                            <GridArea key={`${index}${value.src}`} $style={'y'}>
                                <StackLogo
                                    src={value.src}
                                    alt={value.alt}
                                    text={value.text}
                                    />
                            </GridArea>
                        )
                    })
                }
            </YArea>
            <XArea $stackVisible={stackVisible} $area={AreaBack} $ani_sec={'1.6s'}>
                <StackGridTitle title={'Back'}/>
                {
                    BackStackLogoArray?.length !== 0 &&
                    BackStackLogoArray?.map( (value , index) => {
                        return (
                            <GridArea key={`${index}${value.src}`} $style={'x'}>
                                <StackLogo
                                    src={value.src}
                                    alt={value.alt}
                                    text={value.text}
                                />
                            </GridArea>
                        )
                    })
                }
            </XArea>
            <XArea $stackVisible={stackVisible} $area={AreaEtc} $ani_sec={'2.3s'}>
                <StackGridTitle title={'ETC'}/>
                {
                    EtcStackLogoArray?.length !== 0 &&
                    EtcStackLogoArray?.map( (value , index) => {
                        return (
                            <GridArea key={`${index}${value.src}`} $style={'x'}>
                                <StackLogo
                                    src={value.src}
                                    alt={value.alt}
                                    text={value.text}
                                />
                            </GridArea>
                        )
                    })
                }
            </XArea>

        </StackGridView>
    )
}