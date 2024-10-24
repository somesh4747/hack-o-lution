'use server'
import { sendSelectedTeamMail } from '@/utils/mail'
import db from '@/utils/db'

export async function testSelected() {
    const teams = await db.team.findMany({
        select: {
            mobile: true
        }
    })
    console.log(teams)
    // for (let i of teams) {
    //     if (!i.Team) {
    //         return
    //     }
    //     if (!i.email) {
    //         return
    //     }
    //     await sendSelectedTeamMail(i.Team?.teamName, i.email)
    // }
}
