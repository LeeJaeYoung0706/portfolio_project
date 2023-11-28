import styled, {css} from "styled-components";


interface ButtonInterface {
    content: React.ReactNode
    onClick: () => void
    font: string
    $type: string
}

const headerTypeCss = css`
 background-color: ${(props) => props.theme.palette.main};
  color: ${(props) => props.theme.palette.fontColor};
  border-radius: 8px;
  text-align: center;
  font-size: 19px;
  letter-spacing: 1.8px; // 글자 사이 간격
  line-height: 23px;
  width: 90px;
  height: 83px;
  
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      box-shadow: ${(props) => props.theme.palette.hoverBoxShadow};
      color: ${(props) => props.theme.palette.fontColorHover};
      opacity: 0.9;
    }
  }

  ${(props) => props.theme.media.tablet} {
    max-width: 110px;
    //width: 20vw;
    //height: 5vh;
    //font-size: 1.0rem;

    &:active {
      box-shadow: ${(props) => props.theme.palette.hoverBoxShadow};
      color: ${(props) => props.theme.palette.fontColorHover};
      opacity: 0.9;
    }
  }

  ${(props) => props.theme.media.mobile} {
    max-width: 100px;
    //width: 15vw;
    //height: 5vh;
    //font-size: 0.7rem;

    &:active {
      box-shadow: ${(props) => props.theme.palette.hoverBoxShadow};
      color: ${(props) => props.theme.palette.fontColorHover};
      opacity: 0.9;
    }
  }
`

const ButtonStyle = styled.button<{ $type : string}>`
    ${ (props) => props.$type === 'header' ? headerTypeCss : ''}
`
export default function Button({content, onClick , font , $type}: ButtonInterface) {
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