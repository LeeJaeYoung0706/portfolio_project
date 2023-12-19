import styled from "styled-components";
import React from "react";
import {RussoFont} from "@/style/font";
import {displayFlex} from "@/style/theme/common";

const InputLayoutDivStyle =styled.div`
  min-height: 40px;
  ${displayFlex('column' , 'center' , 'center')};
`

const InputStyle = styled.input`
  border-radius: 7px;
  height: 100%;
  background-color: ${props => props.theme.palette.reverse};
  border: 1px solid ${props => props.theme.palette.middle};
  color: ${props => props.theme.palette.primary};
  padding: 12px;
  font-size: 16px;
  
  &:focus {
    border: 1px solid ${props => props.theme.palette.second70};
    outline: none;
    color: ${props => props.theme.palette.second};
  }
`

const ErrorPStyle = styled.p`
  color: crimson;
  font-size: 12px;
`

interface ErrorInputFormPropsInterface {
  pwdHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  pwd: string,
  errorCheck: boolean
}
export default function ErrorInputForm({pwdHandler, pwd , errorCheck} :ErrorInputFormPropsInterface) {
  return (
    <InputLayoutDivStyle>
      <InputStyle
        type={"password"}
        required={true}
        value={pwd}
        onChange={(e) => pwdHandler(e)}
      />
      {
        errorCheck && <ErrorPStyle>비밀번호가 일치하지 않습니다.</ErrorPStyle>
      }
    </InputLayoutDivStyle>
  )
}