'use client'
import {useScrollPosition} from "@/lib/useScrollPosition";
import HeaderView from "@/atom/organisms/header/HeaderView";
import Logo from "@/atom/atoms/header/Logo";
import PcMenu from "@/atom/molecules/header/menu/PcMenu";
import MobileMenu from "@/atom/molecules/header/menu/MobileMenu";
import React from "react";


export default function Header(): React.JSX.Element {

    const [isTop] = useScrollPosition();

    return (
        <HeaderView isTop={isTop}>
            <Logo
                logoText={'Portfolio'}
                $logoFontSize={'57px'}
            />
            <PcMenu/>
            <MobileMenu/>
        </HeaderView>
    )
}

