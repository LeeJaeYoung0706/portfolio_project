import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StackLogoImageStyle = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  position: relative;
  margin-right: 30px;
`
/**
 * Stack Logo Image
 * @param children
 * @constructor
 */
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