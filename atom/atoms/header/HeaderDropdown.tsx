import {useThemeContext} from "@/lib/ThemeHandlerContext";
import {OrbitFont} from "@/style/font";
import styled from "styled-components";
import Link from "next/link";
import {color} from "@/style/theme/color";
import DropdownLink from "@/atom/atoms/header/DropdownLink";

const HeaderDropdownStyle = styled.div<{ $checked: boolean }>`
  text-decoration: none;
  display: ${(props) => props.$checked ? 'block' : 'none'};
  position: absolute;
  top: 55px;
  width: 100px;
  opacity: 0.8;

    //box-shadow: ${(props) => props.theme.palette.boxShadow};

  ${(props) => props.theme.media.tablet} {
    top: 80px;
  }

  ${(props) => props.theme.media.mobile} {
    top: 80px;
  }

  @media screen and (max-width: 600px) {
    margin-right: 7vw;
  }
`


export default function HeaderDropdown({checked, onClick}: HeaderDropdownInterface) {

    const {themeHandler} = useThemeContext();
    const dropDownLinkArray: DropDownLinkInterface[] = [
        {
            route: '#intro',
            checked: checked,
            font: OrbitFont.className,
            text: 'Intro'
        },
        {
            route: '#about_me',
            checked: checked,
            font: OrbitFont.className,
            text: 'About'
        },
        {
            route: '#stack',
            checked: checked,
            font: OrbitFont.className,
            text: 'Stack'
        },
        {
            route: '',
            checked: checked,
            font: OrbitFont.className,
            text: 'Theme',
            themeHandler: themeHandler
        }
    ]

    return (
        <HeaderDropdownStyle $checked={checked} onClick={onClick}>
            {
                dropDownLinkArray?.length > 0 &&
                dropDownLinkArray?.map((value, index) => {
                    return value?.themeHandler !== undefined ?
                            <DropdownLink
                                route={value.route}
                                checked={value.checked}
                                font={value.font}
                                text={value.text}
                                themeHandler={value.themeHandler}
                                key={`${index}${value.route}`}
                            /> :
                            <DropdownLink
                                route={value.route}
                                checked={value.checked}
                                font={value.font}
                                text={value.text}
                                key={`${index}${value.route}`}
                            />

                })
            }
        </HeaderDropdownStyle>
    )
}