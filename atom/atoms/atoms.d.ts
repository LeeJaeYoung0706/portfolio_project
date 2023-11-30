
interface LogoPropsInterface {
    logoText: string
    logoFont?: string
    $logoFontSize?: string
}

interface HeaderHamburgerButtonInterface {
    checked: boolean
    onClick: () => void
}

interface HeaderDropdownInterface {
    checked: boolean
    onClick: () => void
}

interface AboutMeIdCardViewInterface extends ComponentPropsInterface{
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