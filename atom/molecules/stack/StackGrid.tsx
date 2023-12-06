import StackGridView from "@/atom/molecules/stack/StackGridView";
import React from "react";
import StackLogo from "@/atom/atoms/stack/logo/StackLogo";
import GridArea from "@/atom/molecules/stack/GridArea";
import {BackStackLogoArray, EtcStackLogoArray, FrontStackLogoArray} from "@/atom/molecules/stack/LogoArray";
import StackGridTitle from "@/atom/atoms/stack/title/StackGridTitle";
import YArea from "@/atom/atoms/stack/grid/YArea";
import {AreaBack, AreaEtc, AreaFront} from "@/atom/atoms/stack/grid/commonStyle";
import XArea from "@/atom/molecules/education/XArea";


/**
 * Stack 부분 그리드 영역 Container
 * @constructor
 */
export default function StackGrid(): React.JSX.Element {

    return (
        <StackGridView>
            <YArea $area={AreaFront}>
                <StackGridTitle title={'Front'}/>
                {
                    FrontStackLogoArray?.length !== 0 &&
                    FrontStackLogoArray?.map((value, index) => {
                        return (
                            <GridArea key={`${index}${value.src}`}>
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
            <YArea $area={AreaBack}>
                <StackGridTitle title={'Back'}/>
                {
                    BackStackLogoArray?.length !== 0 &&
                    BackStackLogoArray?.map((value, index) => {
                        return (
                            <GridArea key={`${index}${value.src}`}>
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
            <YArea $area={AreaEtc}>
                <StackGridTitle title={'ETC'}/>
                {
                    EtcStackLogoArray?.length !== 0 &&
                    EtcStackLogoArray?.map((value, index) => {
                        return (
                            <GridArea key={`${index}${value.src}`}>
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
        </StackGridView>
    )
}