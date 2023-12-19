'use client'
import React from "react";
import StackView from "@/atom/organisms/stack/StackView";
import SectionTitle from "@/atom/atoms/title/SectionTitle";
import StackGrid from "@/atom/molecules/stack/StackGrid";
import {StackArticleLayout} from "@/atom/molecules/stack/StackArticleLayout";

/**
 * 스택 부분 Container
 * @constructor
 */
export default function Stack(): React.JSX.Element {

  return (
    <StackView>
      <StackArticleLayout>
        <SectionTitle title={'Stack'} id={'stack'}/>
        <StackGrid/>
      </StackArticleLayout>
    </StackView>
  )
}

