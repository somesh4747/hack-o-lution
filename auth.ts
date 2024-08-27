import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import db from './utils/db'
import { getTeamByEmail } from './utils/data'

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            authorize: async (credentials) => {
                // console.log(credentials)
                const { email, mobile } = credentials as {
                    email: string
                    mobile: string
                }
                // const email: string = credentials.email
                const team = await getTeamByEmail(email)

                if (!team) return null

                if (team.mobile === mobile) {
                    // checking the password
                    return team
                }

                return null
            },
        }),
    ],
})
