'use client'
import {useScrollPosition} from "@/lib/useScrollPosition";
import HeaderView from "@/atom/organisms/header/HeaderView";
import Logo from "@/atom/atoms/header/Logo";
import PcMenu from "@/atom/molecules/header/menu/PcMenu";
import MobileMenu from "@/atom/molecules/header/menu/MobileMenu";
import React, {useCallback, useState} from "react";

/**
 * Header Container
 * @constructor
 */
export default function Header(): React.JSX.Element {
  // 최 상단인지 체크
  const [isTop] = useScrollPosition();
  // 모바일 일 때 메뉴 오픈 상태인지 체크
  const [checked, setChecked] = useState<boolean>(false);

  const checkHandler = useCallback(() => {
    setChecked((pre) => !pre)
  }, [checked])


  return (
    <HeaderView isTop={isTop} checked={checked}>
      <Logo
        logoText={'PORTFOLIO'}
        $logoFontSize={'50px'}
        checked={checked}
      />
      <PcMenu/>
      <MobileMenu checked={checked} checkHandler={checkHandler}/>
    </HeaderView>
  )
}

