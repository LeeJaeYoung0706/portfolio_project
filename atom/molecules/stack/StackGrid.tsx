import StackGridView from "@/atom/molecules/stack/StackGridView";
import React, {useEffect, useRef, useState} from "react";
import StackLogo from "@/atom/atoms/stack/logo/StackLogo";
import GridArea from "@/atom/molecules/stack/GridArea";
import {useAppSelector} from "@/lib/redux/hooks";
import {BackStackLogoArray, EtcStackLogoArray, FrontStackLogoArray} from "@/atom/molecules/stack/LogoArray";
import StackGridTitle from "@/atom/atoms/stack/title/StackGridTitle";
import YArea from "@/atom/atoms/stack/grid/YArea";
import {AreaBack, AreaEtc} from "@/atom/atoms/stack/grid/commonStyle";
import XArea from "@/atom/atoms/stack/grid/XArea";





export default function StackGrid(): React.JSX.Element {

    const {targetId, visible} = useAppSelector((state) => state.targetSlice);
    const [stackVisible, setStackVisible] = useState(false);

    useEffect(() => {
        if (targetId === 'stack') {
            if (!stackVisible)
                setStackVisible(() => visible)
        }
    }, [targetId, visible]);


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
            <XArea $stackVisible={stackVisible} $area={AreaBack} $ani_sec={'1.6s'}>
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
            <XArea $stackVisible={stackVisible} $area={AreaEtc} $ani_sec={'2.3s'}>
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