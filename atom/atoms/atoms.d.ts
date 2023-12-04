

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

interface DropDownLinkInterface {
    route: string
    checked: boolean
    font: string
    text: string
    themeHandler?: () => void
}

interface YAreaInterface extends ComponentPropsInterface {
    $stackVisible: boolean
    children: React.ReactNode[]
}

interface XAreaInterface extends ComponentPropsInterface {
    $ani_sec: string
    $stackVisible: boolean
    $area: RuleSet<object>
    children: React.ReactNode[]
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
    checked: boolean
    period: string
}