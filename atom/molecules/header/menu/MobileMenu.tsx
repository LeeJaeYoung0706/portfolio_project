import React from 'react';
import HeaderHamburgerButton from "@/atom/atoms/header/mobile/HeaderHamburgerButton";
import HeaderDropdown from "@/atom/atoms/header/mobile/HeaderDropdown";
import MobileMenuView, {CloseBackGround} from "@/atom/molecules/header/menu/MobileMenuView";

/**
 * Mobile 메뉴 Container
 * @param checked 오픈 여부
 * @param checkHandler 오픈 헨들러
 * @constructor
 */

export default function MobileMenu({checked, checkHandler}: MobileMenuInterface): React.JSX.Element {
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