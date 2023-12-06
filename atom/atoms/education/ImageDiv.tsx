import React from "react";
import Image from "next/image";
import styled from "styled-components";

const ImageDivStyle = styled.div`
  position: relative;
  height: 400px;
  width: 400px;
  filter: grayscale(100%);
`
function ImageDiv({alt , src} : any):React.JSX.Element {
    return (
        <ImageDivStyle>
            <Image src={src} alt={alt} fill sizes={'300px'} />
        </ImageDivStyle>
    )
}

export default React.memo(ImageDiv)