import {NextFont} from "next/dist/compiled/@next/font";
import { Kdam_Thmor_Pro, Orbit, Titillium_Web} from "next/font/google";


export const kdamThmorPro:NextFont = Kdam_Thmor_Pro({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export const OrbitFont: NextFont = Orbit({
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