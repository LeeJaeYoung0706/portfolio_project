import {useMotionValueEvent, useScroll} from "framer-motion";
import {useRef, useState} from "react";


export const useScrollPosition = (): [boolean] => {
    const {scrollY} = useScroll()

    const [isTop, setIsTop] = useState<boolean>(true);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest < 1) {
            setIsTop(() => true)
        }
        /**
         * State 가 여러번 변경되는 것을 막기 위해서 처리
         */
        if (isTop) {
            if (latest > 1) {
                setIsTop(() => false)
            }
        }
    })

    return [isTop]
}