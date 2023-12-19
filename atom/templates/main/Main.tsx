'use client'
import MainView from "@/atom/templates/main/MainView";
import {useScrollPosition} from "@/lib/useScrollPosition";
import {useEffect} from "react";
import Button from "@/atom/atoms/Button";
import styled from "styled-components";
import {RussoFont} from "@/style/font";
import Image from "next/image";
import {useSearchParams} from "next/navigation";
import ErrorSection from "@/atom/templates/error/ErrorSection";


export default function Main({children}: MainPropsInterface) {
  const [isTop, visibleTopButton, MoveTop] = useScrollPosition();
  const searchParams = useSearchParams();

  // 간단하게 비밀번호 처리
  if (searchParams.get('pwd') !== process.env.NEXT_PUBLIC_DEFAULT_PWD) {
    return <ErrorSection />;
  }

  return (
    <MainView>
      {
        visibleTopButton &&
        <Button onClick={MoveTop}
                content={<Image src={'/top_arrow.png'} alt={'top_arrow'} fill sizes={'100px'}/>}
                font={RussoFont.className}
                $type={'up'}
        />
      }
      {children}
    </MainView>
  )
}
