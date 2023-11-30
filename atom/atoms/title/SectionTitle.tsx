import React, {ForwardedRef, useEffect, useRef, useState} from 'react'
import SectionTitleView from "@/atom/atoms/title/SectionTitleView";
import {useIntersectionObserver} from "@/lib/useIntersectionObserver";
import {useAppDispatch} from "@/lib/redux/hooks";
import {setTargetVisible} from "@/lib/redux/slice/targetSlice";

export default function SectionTitle({title , id}: SectionTitlePropsInterface): React.JSX.Element {

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