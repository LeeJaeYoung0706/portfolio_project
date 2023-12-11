import {NextFont} from "next/dist/compiled/@next/font";
import {
    Black_Han_Sans,
    Cinzel, Gasoek_One,
    Kdam_Thmor_Pro,
    Nanum_Gothic, Noto_Sans, Russo_One,
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


export const RussoFont  = Russo_One({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export const HanSansFont = Black_Han_Sans({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})