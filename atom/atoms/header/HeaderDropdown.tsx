
import {useThemeContext} from "@/lib/ThemeHandlerContext";
import {KoGugi} from "@/style/font";
import styled from "styled-components";
import Link from "next/link";

const HeaderDropdownStyle = styled.div<{ $checked: boolean }>`
  text-decoration: none;
  display: ${(props) => props.$checked ? 'block' : 'none'};
  position: absolute;
  top: 55px;

  width: 100px;
  height: 162px;
  opacity: 0.9;
  box-shadow: ${(props) => props.theme.palette.boxShadow};

  ${(props) => props.theme.media.tablet} {
    top: 70px;
  }
  
  ${(props) => props.theme.media.mobile} {
    top: 70px;
  }
  @media screen and (max-width: 600px) {
    margin-right: 7vw;
  }
`

const HeaderDropdownLinkStyle = styled(Link)<{ $checked: boolean }>`
  color: ${(props) => props.theme.palette.mainReverse70};
  background-color: ${(props) => props.theme.palette.main};
  display: block;
  border: 1px solid ${(props) => props.theme.palette.main70};
  height: 54px;
  text-align: center;
  padding: 11px;
  font-weight: bold;



  &:active {
    color: ${(props) => props.theme.palette.mainReverse};
  }
`

export default function HeaderDropdown({checked, onClick}: HeaderDropdownInterface) {

    const {themeHandler} = useThemeContext();

    return (
        <HeaderDropdownStyle $checked={checked} onClick={onClick}>
            <HeaderDropdownLinkStyle href={"#intro"} $checked={checked}
                                     className={KoGugi.className}>Intro</HeaderDropdownLinkStyle>
            <HeaderDropdownLinkStyle href={"#about_me"} $checked={checked} className={KoGugi.className}>About
                Me</HeaderDropdownLinkStyle>
            <HeaderDropdownLinkStyle href={""} $checked={checked} onClick={themeHandler}
                                     className={KoGugi.className}>Theme</HeaderDropdownLinkStyle>
        </HeaderDropdownStyle>
    )
}