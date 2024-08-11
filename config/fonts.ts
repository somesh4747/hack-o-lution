import {
    JetBrains_Mono as FontMono,
    Poppins as FontSans,
} from 'next/font/google'
import loadFont from 'next/font/local'
export const fontSans = FontSans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-sans',
})

export const fontMono = FontMono({
    subsets: ['latin'],
    variable: '--font-mono',
})

export const hackFonts = loadFont({
    src: '../public/Hacked-KerX.ttf',
    display: 'swap',
})
