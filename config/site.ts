export type SiteConfig = typeof siteConfig
import { auth } from '@/auth'
async function getSession() {
    return await auth()
}
export const siteConfig = {
    name: 'Hack-{0}-lution',
    description:
        'Make beautiful websites regardless of your design experience.',
    navItems: [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Rules',
            href: '/rules',
        },
        {
            label: 'Register',
            href: '/register',
        },
        {
            label: 'login',
            href: '/login',
        },
    ],
    navMenuItems: [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Rules',
            href: '/rules',
        },
        {
            label: 'Register',
            href: '/register',
        },
        {
            label: 'Login',
            href: '/login',
        },
    ],
    links: {
        // github: 'https://github.com/nextui-org/nextui',
        discord: 'https://discord.com/invite/hjxtZZXsD4',
        instagram:
            'https://www.instagram.com/hackolution?igsh=MXd4b3VwaDBneXJsbg==',
    },
}
