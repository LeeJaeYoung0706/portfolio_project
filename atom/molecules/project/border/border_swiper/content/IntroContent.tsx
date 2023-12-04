import First_IntroContentView from "@/atom/molecules/project/border/border_swiper/content/IntroContentView";
import BorderContentTitle from "@/atom/atoms/project/border/BorderContentTitle";
import BorderContentText from "@/atom/atoms/project/border/BorderContentText";
import {BorderContentUlStyle, BorderStackLayoutStyle} from "@/atom/atoms/project/border/BorderContentStyles";
import BorderStack from "@/atom/atoms/project/border/BorderStack";


export default function IntroContent({project} : {project: ProjectInterface}) {

    if (project === undefined){
        return null;
    }

    return (
        <First_IntroContentView>
            <BorderContentTitle title={'소개'} />
            <BorderContentUlStyle>
                <BorderContentText text={project?.introductionTitle} />
                <BorderContentText text={project?.introduction} />
            </BorderContentUlStyle>
            <BorderContentTitle title={'Stack'} />
            <BorderStackLayoutStyle>
                {
                    project?.stack?.length > 0 &&
                    project?.stack?.map((value , index) => {
                        return <BorderStack stack={value} key={`${project?.title}${value}${index}`}/>
                    })
                }
            </BorderStackLayoutStyle>
        </First_IntroContentView>
    )
}