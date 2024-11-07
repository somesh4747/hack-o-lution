'use client'
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from '@nextui-org/navbar'
import { useSession } from 'next-auth/react'

import { Link } from '@nextui-org/link'
import { Input } from '@nextui-org/input'
import { link as linkStyles } from '@nextui-org/theme'
import NextLink from 'next/link'
import { auth } from '@/auth'

import clsx from 'clsx'

import { siteConfig } from '@/config/site'
import { ThemeSwitch } from '@/components/theme-switch'
import {
    TwitterIcon,
    GithubIcon,
    DiscordIcon,
    HeartFilledIcon,
    SearchIcon,
    Logo,
} from '@/components/icons'
import { FaInstagram } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

export const Navbar = () => {
    const session = useSession()
    const router = useRouter()
    return (
        <NextUINavbar maxWidth="xl" position="sticky">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink
                        className="flex justify-start items-center gap-1"
                        href="/"
                    >
                        <p className="font-bold text-inherit text-2xl">
                            &#123;<span className="text-green-400">0</span>
                            &#125;
                        </p>
                    </NextLink>
                </NavbarBrand>
                <ul className="hidden lg:flex gap-4 justify-start ml-2">
                    <NextLink
                        href={'/'}
                        className="text-xl tracking-wide hover:text-stone-400 transition-all duration-250"
                    >
                        Home
                    </NextLink>
                    <NextLink
                        href={'/rules'}
                        className="text-xl tracking-wide hover:text-stone-400 transition-all duration-250"
                    >
                        Rules
                    </NextLink>
                    {/* <NextLink
                        href={'/register'}
                        className="text-xl tracking-wide hover:text-stone-400 transition-all duration-250"
                    >
                        Register
                    </NextLink> */}
                    <NextLink
                        href={'/login'}
                        className="text-xl tracking-wide hover:text-stone-400 transition-all duration-250"
                        onClick={() => router.push('/dashBoard')}
                    >
                        {!!(new Date() > new Date('11-11-2024'))
                            ? session.data
                                ? 'DashBoard'
                                : 'Login'
                            : ''}
                    </NextLink>
                </ul>
            </NavbarContent>
            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    <Link
                        isExternal
                        aria-label="Discord"
                        href={siteConfig.links.instagram}
                    >
                        <FaInstagram className="text-default-500 scale-125" />
                    </Link>
                    <Link
                        isExternal
                        aria-label="Discord"
                        href={siteConfig.links.discord}
                    >
                        <DiscordIcon className="text-default-500" />
                    </Link>

                    {/* <ThemeSwitch /> */}
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <Link
                    isExternal
                    aria-label="Github"
                    href={siteConfig.links.discord}
                >
                    <DiscordIcon className="text-default-500" />
                </Link>
                {/* <ThemeSwitch /> */}
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    <a
                        href={'/'}
                        className="text-xl tracking-wide hover:text-stone-400 transition-all duration-250"
                    >
                        Home
                    </a>
                    <a
                        href={'/rules'}
                        className="text-xl tracking-wide hover:text-stone-400 transition-all duration-250"
                    >
                        Rules
                    </a>
                    {/* <a
                        href={'/register'}
                        className="text-xl tracking-wide hover:text-stone-400 transition-all duration-250"
                    >
                        Register
                    </a> */}
                    <a
                        href={'/login'}
                        className="text-xl tracking-wide hover:text-stone-400 transition-all duration-250"
                    >
                        {!!(new Date() > new Date('11-11-2024'))
                            ? session.data
                                ? 'DashBoard'
                                : 'Login'
                            : ''}
                    </a>
                </div>
            </NavbarMenu>
        </NextUINavbar>
    )
}
