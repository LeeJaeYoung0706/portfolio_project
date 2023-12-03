import styled, {css} from "styled-components";

type ProjectBorderSwiperButtonType = 'forward' | 'back'

const ButtonStyle = styled.button<{$position: ProjectBorderSwiperButtonType}>`
  background-color: ${props => props.theme.palette.middle};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  z-index: 300;
  opacity: 0.5;
  // 화살표
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-top: 3px solid ${props => props.theme.palette.second};
    border-left: 3px solid ${props => props.theme.palette.second};
  }

  ${props => props.$position === 'forward' ? css`
    top: 50%;
    right: 1%;
    &:before {
      transform: translate(-65%, -50%) rotate(135deg);
    }
  ` : css`
    top: 50%;
    left: 1%;

    &:before {
      transform: translate(-35%, -50%) rotate(315deg);
    }
  `};
  transform: translate(-5%, -50%);
`

export default function ContentChangeButton( {onClick , position} : any) {
    return (
        <ButtonStyle onClick={onClick} $position={position} />
    )
}