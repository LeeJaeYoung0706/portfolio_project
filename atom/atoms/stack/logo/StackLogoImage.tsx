import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StackLogoImageStyle = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  background-color: transparent;
  margin-right: 30px;
`

function StackLogoImage({src , alt , size}: StackLogoImageInterface):React.JSX.Element {
    return (
        <StackLogoImageStyle>
            <Image
                src={src}
                alt={alt}
                fill
                sizes={'50px'}
            />
        </StackLogoImageStyle>
    )
}

export default React.memo(StackLogoImage)