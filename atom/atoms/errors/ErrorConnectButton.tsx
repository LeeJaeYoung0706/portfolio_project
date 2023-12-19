import styled from "styled-components";
import {RussoFont} from "@/style/font";


const ButtonDivStyle = styled.div`

`

const ButtonStyle = styled.button`
  color: ${props => props.theme.palette.primary70};
  border: 1px solid ${props => props.theme.palette.middle70};
  padding: 15px;
  border-radius: 7px;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${props => props.theme.palette.second};
      border: 1px solid ${props => props.theme.palette.middle};
    }
  }

  ${(props) => props.theme.media.tablet} {
    &:active {
      color: ${props => props.theme.palette.second};
      border: 1px solid ${props => props.theme.palette.middle};
    }
  }
`

interface ErrorConnectButtonInterface {
  onClickConnect: ()=> void
}

export default function ErrorConnectButton({onClickConnect} :ErrorConnectButtonInterface) {
  return (
    <ButtonDivStyle>
      <ButtonStyle
        onClick={onClickConnect}
        className={RussoFont.className}
      >Connect</ButtonStyle>
    </ButtonDivStyle>
  )
}