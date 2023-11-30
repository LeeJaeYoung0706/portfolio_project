import {css} from "styled-components";

export const areaCommonCSS = css`
  border-radius: 1%;
  padding: 50px;
`

export const AreaEtc = css`
  grid-area: other;
  box-shadow: 0 10px 20px ${props => props.theme.palette.middle}, 0 0 10px ${props => props.theme.palette.second};
`

export const AreaBack = css`
  grid-area: back;
  box-shadow: 0 10px 20px ${props => props.theme.palette.second}, 0 0 10px ${props => props.theme.palette.middle};
`
