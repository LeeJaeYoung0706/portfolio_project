import EducationContentTextPartView from "@/atom/atoms/education/EducationContentTextPartView";


export default function EducationContentTextPart({partTitle , content}: {partTitle: string[] , content: string[]}) {
    return (
        <EducationContentTextPartView
            partTitle={partTitle}
            content={content}
        />
    )
}