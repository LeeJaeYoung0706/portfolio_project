import styled, {css} from "styled-components";
import {color} from "@/style/theme/color";


interface ButtonInterface {
    content: React.ReactNode
    onClick: () => void
    font: string
    $type: string
}

const headerTypeCss = css`
  background-color: transparent;
  text-align: center;
  font-size: 19px;
  letter-spacing: 1.2px; // 글자 사이 간격
  font-weight: bold;
  line-height: 1;
  width: 120px;
  height: 30px;
  border: none;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${(props) => props.theme.palette.reverseSecond};
      //opacity: 0.9;
    }
  }

  ${(props) => props.theme.media.tablet} {
    max-width: 110px;

    &:active {
      color: ${(props) => props.theme.palette.reverseSecond};
      opacity: 0.9;
    }
  }

  ${(props) => props.theme.media.mobile} {
    max-width: 100px;

    &:active {
      color: ${(props) => props.theme.palette.reverseSecond};
      opacity: 0.9;
    }
  }
`


const DefaultButtonStyle = css`
  border: none;
  padding: 30px;
  border-radius: 4px;
  background-color:  ${props => props.theme.palette.second};
  color: ${(props) => props.theme.palette.middle};
  font-weight: bold;
   @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${(props) => props.theme.palette.reverseSecond};
      background-color:  ${props => props.theme.palette.primary};
      //opacity: 0.9;
    }
  }

  ${(props) => props.theme.media.tablet} {
    max-width: 200px;

    &:active {
      color: ${(props) => props.theme.palette.reverseSecond};
      background-color:  ${props => props.theme.palette.primary};
      opacity: 0.9;
    }
  }

  ${(props) => props.theme.media.mobile} {
    max-width: 200px;

    &:active {
      color: ${(props) => props.theme.palette.reverseSecond};
      background-color:  ${props => props.theme.palette.primary};
      opacity: 0.9;
    }
  }
`

const ButtonStyle = styled.button<{ $type: string }>`
  ${(props) => props.$type === 'header' ? headerTypeCss : DefaultButtonStyle}
`
export default function Button({content, onClick, font, $type}: ButtonInterface) {
    return (
        <ButtonStyle
            onClick={onClick}
            className={font}
            $type={$type}
        >
            {content}
        </ButtonStyle>
    )
}