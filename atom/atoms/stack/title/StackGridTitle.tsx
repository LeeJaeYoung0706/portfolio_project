import styled from "styled-components";
import {RussoFont} from "@/style/font";
import {LargeTitleFontSizeMobile, LargeTitleFontSizePC, LargeTitleFontSizeTablet} from "@/style/theme/common";

const StackGridTitleStyle = styled.p`
  z-index: 100;
  ${LargeTitleFontSizePC};
  color: ${props => props.theme.palette.middle};
  width: 100%;
  text-align: center;
  font-weight: bold;

  ${(props) => props.theme.media.tablet} {
    ${LargeTitleFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${LargeTitleFontSizeMobile};
  }
`
/**
 * Stack Grid Title View
 * @param title String title
 * @constructor
 */
export default function StackGridTitle({title}: StackGridTitlePropsInterface) {
  return (
    <StackGridTitleStyle className={RussoFont.className}>
      {title}
    </StackGridTitleStyle>
  )
}