import React from "react";
import styled from "styled-components";
import Image from "next/image";


const ImageDiv = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 0.5vw;
  box-sizing: border-box;
  position: relative;

  ${(props) => props.theme.media.tablet} {
    width: 25px;
    height: 25px;
    margin-right: 0.75vw;
  }

  ${(props) => props.theme.media.mobile} {
    width: 18px;
    height: 17.5px;
    margin-right: 2.3vw;
  }
`

/**
 *  About Title Image
 * @param imageUrl
 * @param title
 * @constructor
 */
function AboutMeIdTitleImage({imageUrl, title}: { title: string, imageUrl: string }): React.JSX.Element {
    return (
        <ImageDiv>
            <Image src={imageUrl} alt={title} fill sizes={'(max-width: 767px) 28px , 30px'}/>
        </ImageDiv>
    )
}

export default React.memo(AboutMeIdTitleImage)