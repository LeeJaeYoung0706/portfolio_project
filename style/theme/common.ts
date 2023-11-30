import {css} from "styled-components";

export const customMediaQuery = (maxWidth: number): string =>
    `@media screen and (max-width: ${maxWidth}px)`


type displayType = 'flex' | 'none';
type flexDirectionType = 'column' | 'column-reverse' | 'row-reverse' | 'row'
type justifyContentType = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
type alignItemsType = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'stretch'
/**
 * Flex Make Function
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