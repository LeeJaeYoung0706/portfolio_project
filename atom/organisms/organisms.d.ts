interface HeaderPropsInterface extends ComponentPropsInterface {
    isTop: boolean
    children: React.ReactNode[]
}

interface AboutMeInterface extends ComponentPropsInterface {
    children: React.ReactNode[]
}

interface IntroInterface extends ComponentPropsInterface {
    children: React.ReactNode
}

interface StackPropsInterface extends ComponentPropsInterface {
    children: React.ReactNode[]
}
interface AboutMeIdCardListInterface {
    idCardContentList:  {title: string , content: string , $imageUrl: string}[]
}