import styled from "styled-components";
import {displayFlex, fontMiddleSizeMobile, fontMiddleSizePC, fontMiddleSizeTablet} from "@/style/theme/common";


export const EducationGridContentLayoutStyle = styled.div`
  padding: 40px;
  width: 100%;
  
  ${(props) => props.theme.media.tablet} {
    padding: 20px;
  }

  ${(props) => props.theme.media.mobile} {
    padding: 0;
  }
`

export const EducationGridContentTitleStyle = styled.div`
  font-size: 28px;
  line-height: 1.4;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${props => props.theme.palette.second};
  
  ${(props) => props.theme.media.tablet} {
    font-size: 26px;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 24px;
  }
`

export const EducationGridContentTextStyle = styled.div`
  margin-top: 20px;
  color: white;
  font-size: 18px;
  ${(props) => props.theme.media.tablet} {
    font-size: 16px;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 14px;
  }
`