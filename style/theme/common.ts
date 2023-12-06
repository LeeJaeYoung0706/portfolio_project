import {css} from "styled-components";

/**
 * 반응형 쿼리
 * @param maxWidth
 */
export const customMediaQuery = (maxWidth: number): string =>
    `@media screen and (max-width: ${maxWidth}px)`


export const fontMiddleSizePC = css`font-size: 1.8em;`;
export const fontMiddleSizeTablet = css`font-size: 1.7em;`;
export const fontMiddleSizeMobile = css`font-size: 1.3em;`;

type displayType = 'flex' | 'none';
type flexDirectionType = 'column' | 'column-reverse' | 'row-reverse' | 'row'
type justifyContentType = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
type alignItemsType = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'stretch'
/**
 * Flex 만들기 편하게 만든 function
 * @param display
 * @param flexDirection
 * @param justifyContent
 * @param alignItems
 */
export const displayFlex = (flexDirection :flexDirectionType, justifyContent :justifyContentType, alignItems :alignItemsType , display :displayType = 'flex' , wrap?: boolean ) => css`
      display: ${display};
      flex-direction: ${flexDirection};
      justify-content: ${justifyContent};
      align-items: ${alignItems};
      flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
    `