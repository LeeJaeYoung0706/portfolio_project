'use client'

import {useThemeContext} from "@/lib/ThemeHandlerContext";
import {useScrollPosition} from "@/lib/useScrollPosion";


import HeaderView from "@/atom/organisms/header/HeaderView";
import Button from "@/atom/atoms/Button";
import Logo from "@/atom/atoms/header/Logo";
import PcMenu from "@/atom/molecules/header/menu/PcMenu";
import MobileMenu from "@/atom/molecules/header/menu/MobileMenu";


export default function Header() {

    const [isTop] = useScrollPosition();

    return (
        <HeaderView isTop={isTop}>
            <Logo
                logoText={'Lee Jae Young'}
                $logoFontSize={'60px'}
            />
            <PcMenu />
            <MobileMenu />
        </HeaderView>
    )
}

