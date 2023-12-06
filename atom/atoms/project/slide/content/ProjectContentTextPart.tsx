import ProjectContentTextPartView from "@/atom/atoms/project/slide/content/ProjectContentTextPartView";


export default function ProjectContentTextPart({partTitle , content}: {partTitle: string , content: string[]}) {
    return (
        <ProjectContentTextPartView
            partTitle={partTitle}
            content={content}
        />
    )
}