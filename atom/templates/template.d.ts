
interface ContainerPropsInterface extends ComponentPropsInterface{
    children: React.ReactNode
}

interface MainPropsInterface extends ComponentPropsInterface{
    children: React.ReactNode
}

/**
 * Theme Handler Props Drilling 해결을 위해서 생성
 */
interface ThemeHandlerInterface {
    theme: DefaultTheme
    themeHandler: () => void
}