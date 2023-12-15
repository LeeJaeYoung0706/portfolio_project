'use client'
import React from 'react';
import HeaderPcMenuView from "@/atom/molecules/header/menu/PcMenuView";
import Button from "@/atom/atoms/Button";
import {useRouter} from "next/navigation";
import {NGodicFont, RussoFont} from "@/style/font";
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
      content: 'INTRO',
      onClick: () => router.push('#intro'),
      font: RussoFont.className,
      $type: 'header'
    },
    {
      content: 'ABOUT',
      onClick: () => router.push('#about'),
      font: RussoFont.className,
      $type: 'header'
    },
    {
      content: 'STACK',
      onClick: () => router.push('#stack'),
      font: RussoFont.className,
      $type: 'header'
    },
    {
      content: 'PROJECT',
      onClick: () => router.push('#project'),
      font: RussoFont.className,
      $type: 'header'
    },
    {
      content: 'EDUCATION',
      onClick: () => router.push('#education'),
      font: RussoFont.className,
      $type: 'header'
    },
    {
      content: 'THEME',
      onClick: themeHandler,
      font: RussoFont.className,
      $type: 'header'
    },
  ]

  return (
    <HeaderPcMenuView $isTop={isTop}>
      {
        MenuButtonArray?.length > 0 &&
        MenuButtonArray?.map((value: MenuButtonArrayInterface, index: number) => {
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