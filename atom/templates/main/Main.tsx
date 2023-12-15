'use client'
import MainView from "@/atom/templates/main/MainView";


export default function Main({children}: MainPropsInterface) {
  return (
    <MainView>
      {children}
    </MainView>
  )
}
