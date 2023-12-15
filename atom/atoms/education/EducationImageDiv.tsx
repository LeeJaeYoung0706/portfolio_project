import React from "react";
import Image from "next/image";
import styled from "styled-components";

const EducationImageDivStyle = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  filter: grayscale(100%);
  opacity: 0.7;
  overflow: hidden;

  ${(props) => props.theme.media.tablet} {

  }

  ${(props) => props.theme.media.mobile} {
    display: none;
  }
`

/**
 * 이미지 그리드 디브
 * @param alt => 이미지 alt
 * @param src => 이미지 src
 * @constructor
 */
function EducationImageDiv({alt , src} : ImageDivPropsInterface):React.JSX.Element {
    return (
        <EducationImageDivStyle>
            <Image src={src} alt={alt} fill sizes={'300px'} />
        </EducationImageDivStyle>
    )
}

export default React.memo(EducationImageDiv)