interface HeaderPcMenuInterface extends ComponentPropsInterface {
  children: React.ReactNode
  $isTop: boolean
}

interface MobileMenuPropsInterface extends ComponentPropsInterface {
  children: React.ReactNode[]
}


interface AboutMeIdCardListViewInterface {
  children: React.ReactNode
}

interface MenuButtonArrayInterface {
  content: string,
  onClick: () => void,
  font: string,
  $type: string
}

interface ProjectTitleViewInterface extends ComponentPropsInterface {
  children: React.ReactNode
}

interface StackLogoImageInterface {
  src: string,
  alt: string,
  size: string
}

interface StackLogoInterface {
  src: string,
  alt: string,
  text: string
}


interface InitSwiperContentInterface {
  onCheckHandler: () => void
}

