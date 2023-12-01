'use client'
import React from 'react';
import HeaderPcMenuView from "@/atom/molecules/header/menu/PcMenuView";
import Button from "@/atom/atoms/Button";
import {useRouter} from "next/navigation";
import {OrbitFont} from "@/style/font";
import {useThemeContext} from "@/lib/ThemeHandlerContext";
import {useScrollPosition} from "@/lib/useScrollPosition";

/**
 * Header Pc Menu container
 * @constructor
 */

export default function HeaderPcMenu(): React.JSX.Element {

    // ServerSide => next/router , CSR => navigation
    const router = useRouter();
    const {themeHandler} = useThemeContext();
    const [isTop] = useScrollPosition();

    const MenuButtonArray: MenuButtonArrayInterface[] = [
        {
            content: 'Intro',
            onClick: () => router.push('#intro'),
            font: OrbitFont.className,
            $type: 'header'
        },
        {
            content: 'About',
            onClick: () => router.push('#about_me'),
            font: OrbitFont.className,
            $type: 'header'
        },
        {
            content: 'Stack',
            onClick: () => router.push('#stack'),
            font: OrbitFont.className,
            $type: 'header'
        },
        {
            content: 'Theme',
            onClick: themeHandler,
            font: OrbitFont.className,
            $type: 'header'
        },
    ]

    return (
        <HeaderPcMenuView $isTop={isTop}>
            {
                MenuButtonArray?.length > 0 &&
                MenuButtonArray?.map( (value: MenuButtonArrayInterface, index: number) => {
                    return (
                        <Button
                            content={value.content}
                            onClick={value.onClick}
                            font={value.font}
                            $type={value.$type}
                            key={`${index}.${value.content}`}
                        />
                    )
                 })
            }
        </HeaderPcMenuView>
    )
}