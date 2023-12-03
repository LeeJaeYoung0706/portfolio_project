import StackGridView from "@/atom/molecules/stack/StackGridView";
import React, {useEffect, useRef, useState} from "react";
import StackLogo from "@/atom/atoms/stack/logo/StackLogo";
import GridArea from "@/atom/molecules/stack/GridArea";
import {useAppDispatch, useAppSelector} from "@/lib/redux/hooks";
import {BackStackLogoArray, EtcStackLogoArray, FrontStackLogoArray} from "@/atom/molecules/stack/LogoArray";
import StackGridTitle from "@/atom/atoms/stack/title/StackGridTitle";
import YArea from "@/atom/atoms/stack/grid/YArea";
import {AreaBack, AreaEtc} from "@/atom/atoms/stack/grid/commonStyle";
import XArea from "@/atom/atoms/stack/grid/XArea";


/**
 * Stack 부분 그리드 영역 Container
 * @constructor
 */
export default function StackGrid(): React.JSX.Element {
    // Target 요소 관찰
    const {stack} = useAppSelector((state) => state.targetSlice);
    const [stackVisible, setStackVisible] = useState(false);

    useEffect(() => {
        if (!stackVisible && stack !== undefined) {
            setStackVisible(() => stack.visible)
        }
    }, [stack]);


    return (
        <StackGridView>
            <YArea $stackVisible={stackVisible}>
                <StackGridTitle title={'Front'}/>
                {
                    FrontStackLogoArray?.length !== 0 &&
                    FrontStackLogoArray?.map((value, index) => {
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
            <XArea $stackVisible={stackVisible} $area={AreaBack} $ani_sec={'0.8s'}>
                <StackGridTitle title={'Back'}/>
                {
                    BackStackLogoArray?.length !== 0 &&
                    BackStackLogoArray?.map((value, index) => {
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
            <XArea $stackVisible={stackVisible} $area={AreaEtc} $ani_sec={'1.2s'}>
                <StackGridTitle title={'ETC'}/>
                {
                    EtcStackLogoArray?.length !== 0 &&
                    EtcStackLogoArray?.map((value, index) => {
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