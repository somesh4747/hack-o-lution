import { auth as middleware } from '@/auth'

export default middleware(async (req) => {
    const { nextUrl } = req

    const isLoggedIn = !!req.auth

    const isDashboardRoute = req.nextUrl.pathname.startsWith('/dashboard')
    const isLoginRoute = req.nextUrl.pathname.startsWith('/login')

    // if user is logged in then the user must go to the dashboard instead of login page
    if (isLoginRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL('/dashboard', nextUrl))
        }
    }


    // if the user is not logged in then user should not access the dashboard
    if (isDashboardRoute) {
        if (!isLoggedIn) {
            return Response.redirect(new URL('/login', nextUrl))
        }
    }

    return
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}
