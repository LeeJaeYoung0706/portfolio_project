import React, {useEffect, useRef} from 'react'
import SectionTitleView from "@/atom/atoms/title/SectionTitleView";
import {useIntersectionObserver} from "@/lib/useIntersectionObserver";
import {useAppDispatch, useAppSelector} from "@/lib/redux/hooks";
import {setAboutVisible, setProjectVisible, setStackVisible} from "@/lib/redux/slice/targetSlice";

/**
 * Section 마다 존재하는 Title Container
 */
export default function SectionTitle({title, id}: SectionTitlePropsInterface): React.JSX.Element {

    //visible 체크를 위한 ref
    const ref = useRef<HTMLDivElement | null>(null)
    const [entry, targetId, visible] = useIntersectionObserver(ref, {})
    const dispatch = useAppDispatch();

    /**
     * Scroll Visible Check
     */
    useEffect(() => {
        if (targetId !== undefined) {
            switch (targetId) {
                case "about_me": {
                    dispatch(
                        setAboutVisible(
                            {
                                visible: visible
                            }
                        )
                    );
                    break;
                }
                case "stack": {
                    dispatch(
                        setStackVisible(
                            {
                                visible: visible
                            }
                        )
                    );
                    break;
                }
                case "project": {
                    dispatch(
                        setProjectVisible(
                            {
                                visible: visible
                            }
                        )
                    );
                    break;
                }
                default:
                    break;
            }
        }
    }, [entry]);


    return (
        <SectionTitleView title={title} id={id} ref={ref}/>
    )
}