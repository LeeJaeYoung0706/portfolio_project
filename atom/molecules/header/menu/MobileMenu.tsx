import React from 'react';
import HeaderHamburgerButton from "@/atom/atoms/header/HeaderHamburgerButton";
import HeaderDropdown from "@/atom/atoms/header/HeaderDropdown";
import MobileMenuView, {CloseBackGround} from "@/atom/molecules/header/menu/MobileMenuView";



export default function MobileMenu({checked , checkHandler} : MobileMenuInterface ): React.JSX.Element {


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