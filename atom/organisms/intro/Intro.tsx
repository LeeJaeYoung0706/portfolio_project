'use client'
import IntroView from "@/atom/organisms/intro/IntroView";
import IntroSvg from "@/atom/atoms/intro/IntroSvg";
import {Kdam_Thmor_Pro} from "next/font/google";
import React from "react";

/**
 * Intro Container
 * @constructor
 */
export default function Intro(): React.JSX.Element {
  return (
    <IntroView>
      <IntroSvg/>
    </IntroView>
  )
}