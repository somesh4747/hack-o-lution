import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const GoogleFont = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
})
const myFont = localFont({
    src: '/Hacked-KerX.ttf',
    display: 'swap',
})
export const metadata: Metadata = {
    title: 'HACK{0}LUTION',
    description: 'BCA Department Hackathon',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={myFont.className}>{children}</body>
        </html>
    )
}
