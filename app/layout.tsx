import '@/styles/globals.css'
import { Metadata, Viewport } from 'next'
import { Link } from '@nextui-org/link'
import clsx from 'clsx'
import localFont from 'next/font/local'

import { Providers } from './providers'

import { siteConfig } from '@/config/site'
import { fontSans } from '@/config/fonts'
import { Navbar } from '@/components/navbar'

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: '/favicon.ico',
    },
}

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
}
import { hackFonts } from '@/config/fonts'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body
                style={{ backgroundImage: "url('/hero1.jpg')" }}
                className={clsx(
                    ' bg-fixed bg-center bg-cover',
                    hackFonts.className
                )}
            >
                <Providers
                    themeProps={{ attribute: 'class', defaultTheme: 'dark' }}
                >
                    <Navbar />
                    <div className="relative flex flex-col">
                        <main className=" bg-gradient-to-b from-black/80 to-black/50 z-10">
                            {children}
                        </main>
                    </div>
                </Providers>
            </body>
        </html>
    )
}
