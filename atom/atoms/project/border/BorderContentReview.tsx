import React from "react";
import styled from "styled-components";
import {NGodicFont} from "@/style/font";
import {fontMiddleSizeMobile, fontMiddleSizePC, fontMiddleSizeTablet} from "@/style/theme/common";


const BoarderContentReviewStyle = styled.div`
  ${fontMiddleSizePC};
  line-height: 1.3;
  padding-right: 50px;
  padding-bottom: 70px;
  color: ${props => props.theme.palette.second};

  ${(props) => props.theme.media.tablet} {
    padding-right: 0;
    ${fontMiddleSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    padding-right: 0;
    ${fontMiddleSizeMobile};
    line-height: 1.5;

  }
`

/**
 * Project 후기
 * @param review
 * @constructor
 */
function BorderContentReview({review}: BorderContentReviewInterface):React.JSX.Element {
    return (
        <BoarderContentReviewStyle className={NGodicFont.className}>
            {review}
        </BoarderContentReviewStyle>
    )
}

export default React.memo(BorderContentReview);