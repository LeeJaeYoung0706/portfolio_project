'use client'
import React from 'react';
import HeaderPcMenuView from "@/atom/molecules/header/menu/PcMenuView";
import Button from "@/atom/atoms/Button";
import { useRouter} from "next/navigation";
import {roboto} from "@/style/font";
import {useThemeContext} from "@/lib/ThemeHandlerContext";



export default function HeaderPcMenu() :React.JSX.Element {

    // ServerSide => next/router , CSR => navigation
    const router = useRouter();
    const {themeHandler} = useThemeContext();

    return (
        <HeaderPcMenuView>
            <Button
                content={'Intro'}
                onClick={() => router.push('#intro')}
                font={roboto.className}
                $type={'header'}
                />
            <Button
                content={'About Me'}
                onClick={() => router.push('#about_me')}
                font={roboto.className}
                $type={'header'}
            />
            <Button
                content={'Stack'}
                onClick={() => router.push('#intro')}
                font={roboto.className}
                $type={'header'}
            />
            <Button
                content={'Project'}
                onClick={() => router.push('#intro')}
                font={roboto.className}
                $type={'header'}
            />
            <Button
                content={'Theme'}
                onClick={themeHandler}
                font={roboto.className}
                $type={'header'}
            />
        </HeaderPcMenuView>
    )
}