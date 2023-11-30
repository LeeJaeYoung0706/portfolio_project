'use client'
import React, {useEffect, useRef, useState} from "react";
import StackView from "@/atom/organisms/stack/StackView";
import SectionTitle from "@/atom/atoms/title/SectionTitle";
import {useScrollPosition} from "@/lib/useScrollPosition";
import {useIntersectionObserver} from "@/lib/useIntersectionObserver";
import StackGrid from "@/atom/molecules/stack/StackGrid";


export default function Stack(): React.JSX.Element {



    return (
        <StackView >
            <SectionTitle title={'Stack'} id={'stack'} />
            <StackGrid />
        </StackView>
    )
}

