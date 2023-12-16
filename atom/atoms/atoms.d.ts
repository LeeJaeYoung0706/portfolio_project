
interface LogoPropsInterface {
    logoText: string
    logoFont?: string
    $logoFontSize?: string
    checked: boolean
}

interface HeaderHamburgerButtonInterface {
    checked: boolean
    onClick: () => void
}

interface HeaderDropdownInterface {
    checked: boolean
    onClick: () => void
}

interface AboutMeIdCardViewInterface extends ComponentPropsInterface {
    children: React.ReactNode
}

interface AboutMeIdCardPropsInterface {
    content: string
    title: string
    imageUrl: string
}

interface SectionTitlePropsInterface {
    title: string
    id: string
    ref?: React.RefObject<HTMLDivElement>
}

interface SectionTitleViewPropsInterface {
    title: {first: string , other: string}
    id: string
    ref?: React.RefObject<HTMLDivElement>
}

interface DropDownLinkInterface {
    route: string
    checked: boolean
    font: string
    text: string
    themeHandler?: () => void
}

interface YAreaInterface extends ComponentPropsInterface {
    children: React.ReactNode[]
    $area: RuleSet<Object>
}


interface ProjectTitleLiViewInterface {
    title: string
    checked: boolean
    liOnClick: () => void
}


interface ProjectHighLightTitleInterface {
    project: ProjectInterface | undefined
}

interface ProjectInterface {
    index: number,
    title: string,
    checked: boolean,
    period: string,
    stack?: string[],
    introductionTitle?: string,
    introduction?: string,
    responsibilities?: string[],
    functions?: string[],
    link?: string,
    review?: string
}

interface BorderContentReviewInterface {
    review: string
}

interface BorderTextInterface {
    text: string
}

interface ProjectTitleLiInterface {
    project: ProjectInterface
    projectCheckHandler: (check: ProjectInterface) => void
}

interface ProjectInnerTitleInterface {
    title: string
}

interface ProjectLinkTagInterface {
    link: string
    $area: RuleSet<Object>
}

interface ImageDivPropsInterface {
    alt: string
    src: string
}

interface ProjectContentPropsInterface {
    position: boolean,
    content: string[],
}

interface ProjectContentTextPartPropsInterface {
    content: string[]
}

interface StackLogoTextPropsInterface {
    text: string
}

interface StackGridTitlePropsInterface {
    title: string
}

interface AboutMeIdCardContentPropsInterface {
    content: string
}

interface AboutMeIdCardTitlePropsInterface {
    font: string , title: string
}

interface AboutMeIdTitlePropsInterface {
    font: string,
    title: string,
    imageUrl: string
}

interface AboutMeIdTitleImagePropsInterface {
    title: string,
    imageUrl: string
}

interface AboutMeIdTitleViewPropsInterface {
    children: React.ReactNode
}

interface ProjectSlideTitleDivPropsInterface {
    title: string,
    position: boolean,
    src: string,
    alt:string
}