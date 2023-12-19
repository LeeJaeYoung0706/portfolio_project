'use client'
import ErrorSectionView from "@/atom/templates/error/ErrorSectionView";
import {useRouter, useSearchParams} from "next/navigation";
import ErrorTitle from "@/atom/atoms/errors/ErrorTitle";
import ErrorInputForm from "@/atom/atoms/errors/ErrorInputForm";
import React, {useCallback, useState} from "react";
import ErrorConnectButton from "@/atom/atoms/errors/ErrorConnectButton";

/**
 * 비밀번호로 접근 가능하도록 하는 가드 페이지
 * @constructor
 */
export default function ErrorSection() {

  const [pwd , setPwd] = useState<string>('');
  const router = useRouter();
  const [errorCheck , setErrorCheck] = useState<boolean>(false);

  const pwdHandler = useCallback( (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorCheck(() => false);
    setPwd(() => e.target.value)
  } , [pwd])

  const onClickConnect = useCallback( () =>  {
    if (pwd !== process.env.NEXT_PUBLIC_DEFAULT_PWD) {
      setErrorCheck(() => true);
      return false;
    }
    router.push( `?pwd=${pwd}`)
  } , [pwd]);

  return (
    <ErrorSectionView>
      <ErrorTitle />
      <ErrorInputForm pwdHandler={pwdHandler} pwd={pwd} errorCheck={errorCheck}/>
      <ErrorConnectButton onClickConnect={onClickConnect} />
    </ErrorSectionView>
  )
}