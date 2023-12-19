'use client'
import ErrorSectionView from "@/atom/templates/error/ErrorSectionView";
import {useSearchParams} from "next/navigation";
import ErrorTitle from "@/atom/atoms/errors/ErrorTitle";


export default function ErrorSection() {

  const searchParams = useSearchParams();

  return (
    <ErrorSectionView>
      <ErrorTitle />
      <div>
        <input type={"text"} required={true}/>
      </div>
    </ErrorSectionView>
  )
}