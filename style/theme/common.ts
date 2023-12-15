import {css, RuleSet} from "styled-components";

/**
 * 반응형 쿼리
 * @param maxWidth
 */
export const customMediaQuery = (maxWidth: number): string =>
    `@media screen and (max-width: ${maxWidth}px)`

export const commonAnimation = (animationCss: RuleSet<Object>) => css`
  -webkit-animation: ${animationCss};
  -moz-animation: ${animationCss};
  -o-animation: ${animationCss};
  animation: ${animationCss};
`

/**
 * Font Size 통일화
 */
export const LargeTitleFontSizePC = css`font-size: 40px;`;
export const LargeTitleFontSizeTablet = css`font-size: 36px;`;
export const LargeTitleFontSizeMobile = css`font-size: 28px;`;
export const MiddleTitleFontSizePC = css`font-size: 26px;`;
export const MiddleTitleFontSizeTablet = css`font-size: 22px;`;
export const MiddleTitleFontSizeMobile = css`font-size: 20px;`;
export const ContentFontSizePC = css`font-size: 20px;`;
export const ContentFontSizeTablet = css`font-size: 17px;`;
export const ContentFontSizeMobile = css`font-size: 15px;`;
``
export const ContentLineHeight = css`line-height: 1.7`;
export const MiddleTitleLineHeight = css``;
export const SectionTitleLineHeight = css``;


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