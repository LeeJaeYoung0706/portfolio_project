import StackLogoView from "@/atom/atoms/stack/logo/StackLogoView";
import StackLogoImage from "@/atom/atoms/stack/logo/StackLogoImage";
import StackLogoText from "@/atom/atoms/stack/logo/StackLogoText";

/**
 *
 * Stack Logo Container
 *
 * @param src => logo Image src
 * @param alt => logo Image alt
 * @param text => 기술 텍스트
 * @constructor
 */
export default function StackLogo({src , alt , text} : StackLogoInterface) {
    return (
        <StackLogoView>
            <StackLogoImage
                src={src}
                alt={alt}
                size={'(max-width: 767px) 30px , 30px'}
            />
            <StackLogoText
                text={text}
            />
        </StackLogoView>
    )
}