import localFont from 'next/font/local'
import {NextFont} from "next/dist/compiled/@next/font";
import {Roboto} from "next/font/google";

export const EnKdam: NextFont = localFont({ src: '../public/font/local/KdamThmorPro-Regular.ttf' })
export const KoGugi = localFont({ src: '../public/font/local/Gugi-Regular.ttf' })
export const KoBagel = localFont({ src: '../public/font/local/BagelFatOne-Regular.ttf' })
export const KoNanum = localFont({ src: '../public/font/local/NanumPenScript-Regular.ttf' })
export const KoGamja = localFont({ src: '../public/font/local/GamjaFlower-Regular.ttf' })
export const KoHansan = localFont({ src: '../public/font/local/BlackHanSans-Regular.ttf' })
export const KoSunFlower = localFont({ src: '../public/font/local/Sunflower-Medium.ttf' })

export const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',

})
