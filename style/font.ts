import {NextFont} from "next/dist/compiled/@next/font";
import {
    Anton,
    Beau_Rivage, Cinzel, Indie_Flower,
    Kdam_Thmor_Pro,
    Labrada,
    Nanum_Gothic, Nanum_Pen_Script, Noto_Sans,
    Orbit,
    Pacifico, Shadows_Into_Light,
    Shadows_Into_Light_Two,
    Titillium_Web
} from "next/font/google";


export const kdamThmorPro:NextFont = Kdam_Thmor_Pro({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export const CinzelFont: NextFont = Cinzel({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export const TitllFont: NextFont = Titillium_Web(
    {
        weight: '400',
        subsets: ['latin'],
        display: 'swap',
    }
)

export const NGodicFont: NextFont = Nanum_Gothic({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export const NotoSansFont: NextFont = Noto_Sans({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})