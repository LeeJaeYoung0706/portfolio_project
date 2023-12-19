import {useThemeContext} from "@/lib/ThemeHandlerContext";
import {NotoSansFont} from "@/style/font";
import styled, {css} from "styled-components";
import DropdownLink from "@/atom/atoms/header/mobile/DropdownLink";
import {dropdownAnimation} from "@/style/animation";
import {commonAnimation} from "@/style/theme/common";


const HeaderDropdownStyle = styled.nav<{ $checked: boolean }>`
  text-decoration: none;
  display: ${(props) => props.$checked ? 'block' : 'none'};
  position: absolute;
  top: 53px;
  width: 100vw;
  opacity: 0.9;
  right: 0;


  &:last-child {
    border-bottom: 2px solid ${props => props.theme.palette.middle};
  }

  ${(props) => props.$checked && commonAnimation(css`${dropdownAnimation} 0.5s normal linear;`)};

  ${(props) => props.theme.media.tablet} {
    top: 60px;
  }

  ${(props) => props.theme.media.mobile} {
    top: 60px;
    min-width: 370px;
  }


`
/**
 * Mobile Header Menu Open Dropdown
 * @param checked 클릭 여부
 * @param onClick 테마 핸들러 또는 라우트를 위한 클릭펑션
 * @constructor
 */

export default function HeaderDropdown({checked, onClick}: HeaderDropdownInterface) {
  // 테마 핸들러
  const {themeHandler} = useThemeContext();
  // 드롭다운 링크 리스트
  const dropDownLinkArray: DropDownLinkInterface[] = [
    {
      route: '#intro',
      checked: checked,
      font: NotoSansFont.className,
      text: 'Intro'
    },
    {
      route: '#about',
      checked: checked,
      font: NotoSansFont.className,
      text: 'About'
    },
    {
      route: '#stack',
      checked: checked,
      font: NotoSansFont.className,
      text: 'Stack'
    },
    {
      route: '#project',
      checked: checked,
      font: NotoSansFont.className,
      text: 'Project',
    },
    {
      route: '#education',
      checked: checked,
      font: NotoSansFont.className,
      text: 'Education',
    },
    {
      route: '',
      checked: checked,
      font: NotoSansFont.className,
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