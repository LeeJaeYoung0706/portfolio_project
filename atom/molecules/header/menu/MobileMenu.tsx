'use client'
import React from 'react';
import {useCallback, useState} from "react";
import HeaderHamburgerButton from "@/atom/atoms/header/HeaderHamburgerButton";
import HeaderDropdown from "@/atom/atoms/header/HeaderDropdown";
import MobileMenuView, {CloseBackGround} from "@/atom/molecules/header/menu/MobileMenuView";



export default function MobileMenu () {

    const [checked, setChecked] = useState<boolean>(false);

    const checkHandler = useCallback(() => {
        setChecked((pre) => !pre)
    }, [checked])

    return (
        <>
            {
                checked && <CloseBackGround onClick={checkHandler}/>
            }
            <MobileMenuView>
                <HeaderHamburgerButton checked={checked} onClick={checkHandler}/>
                <HeaderDropdown checked={checked} onClick={checkHandler}/>
            </MobileMenuView>
        </>
    )
}