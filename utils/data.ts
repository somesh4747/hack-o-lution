import db from './db'

export async function getTeamByEmail(email: string ) {
    const team = await db.team.findFirst({
        where: {
            email: email,
        },
    })
    if (team) return team

    return null
}
