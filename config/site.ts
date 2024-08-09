export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: 'Hack-0-lution',
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

    ],
    navMenuItems: [
        {
            label: 'Dashboard',
            href: '/dashboard',
        },
        {
            label: 'Projects',
            href: '/projects',
        },
        {
            label: 'Team',
            href: '/team',
        },
        {
            label: 'Logout',
            href: '/logout',
        },
    ],
    links: {
        github: 'https://github.com/nextui-org/nextui',
        discord: 'https://discord.gg/9b6yyZKmH4',
    },
}
