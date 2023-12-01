import React, {ForwardedRef, useEffect, useRef, useState} from 'react'
import SectionTitleView from "@/atom/atoms/title/SectionTitleView";
import {useIntersectionObserver} from "@/lib/useIntersectionObserver";
import {useAppDispatch} from "@/lib/redux/hooks";
import {setTargetVisible} from "@/lib/redux/slice/targetSlice";
/**
 * Section 마다 존재하는 Title Container
 */
export default function SectionTitle({title , id}: SectionTitlePropsInterface): React.JSX.Element {

    //visible 체크를 위한 ref
    const ref = useRef<HTMLDivElement | null>(null)
    const [entry ,targetId , visible ] = useIntersectionObserver(ref, {})
    const dispatch = useAppDispatch();

    /**
     * Scroll Visible Check
     */
    useEffect(() => {
        dispatch(
            setTargetVisible({
                targetId: targetId,
                visible: visible
            })
        )
    }, [entry]);




    return (
        <SectionTitleView title={title} id={id} ref={ref}/>
    )
}