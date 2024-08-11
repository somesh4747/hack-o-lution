export type SiteConfig = typeof siteConfig

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
    ],
    navMenuItems: [
        {
            label: 'Home',
            href: '/home',
        },
        {
            label: 'Register',
            href: '/register',
        },
    ],
    links: {
        github: 'https://github.com/nextui-org/nextui',
        discord: 'https://discord.gg/9b6yyZKmH4',
    },
}
