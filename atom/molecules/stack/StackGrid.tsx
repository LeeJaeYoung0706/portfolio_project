import StackGridView from "@/atom/molecules/stack/StackGridView";
import React from "react";
import StackLogo from "@/atom/atoms/stack/logo/StackLogo";
import GridArea from "@/atom/molecules/stack/GridArea";
import {BackStackLogoArray, EtcStackLogoArray, FrontStackLogoArray} from "@/atom/molecules/stack/LogoArray";
import StackGridTitle from "@/atom/atoms/stack/title/StackGridTitle";
import StackArea from "@/atom/atoms/stack/grid/StackArea";
import {AreaBack, AreaEtc, AreaFront} from "@/atom/atoms/stack/grid/commonStyle";


/**
 * Stack 부분 그리드 영역 Container
 * @constructor
 */
export default function StackGrid(): React.JSX.Element {

    return (
        <StackGridView>
            <StackArea $area={AreaFront}>
                <StackGridTitle title={'FRONT'}/>
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
            </StackArea>
            <StackArea $area={AreaBack}>
                <StackGridTitle title={'BACK'}/>
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
            </StackArea>
            <StackArea $area={AreaEtc}>
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
            </StackArea>
        </StackGridView>
    )
}