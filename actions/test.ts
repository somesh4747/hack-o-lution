'use server'
import { sendSelectedTeamMail } from '@/utils/mail'
import db from '@/utils/db'

export async function testSelected() {
    const teams = await db.member.findMany({
        select: {
            email: true,
            Team: {
                select: {
                    teamName: true,
                },
            },
        },
        skip: 15,
    })
    const mem = await db.team.findMany({
        select: {
            teamName: true,
            mobile: true,
        },
    })
    const lastMembers = [
        {
            email: 'boserudraksha007@gmail.com',
            Team: { teamName: 'Coding Enthusiasts' },
        },
        {
            email: 'suchismitasaha2006@gmail.com',
            Team: { teamName: 'Coding Enthusiasts' },
        },
        {
            email: 'sauranjalidhard@gmail.com',
            Team: { teamName: 'Coding Enthusiasts' },
        },
        {
            email: 'soumyadipadak99@gmail.com',
            Team: { teamName: 'TriCore Innovators' },
        },
        {
            email: 'srijanray11@gmail.com',
            Team: { teamName: 'TriCore Innovators' },
        },
        {
            email: 'shashwatasuvro@gmail.com',
            Team: { teamName: 'TriCore Innovators' },
        },
        {
            email: 'souravbose361@gmail.com',
            Team: { teamName: 'Debugging Ninjas' },
        },
        {
            email: 'sourishchkbkp@gmail.com',
            Team: { teamName: 'Debugging Ninjas' },
        },
    ]
    // for (let i of lastMembers) {
    //     if (!i.Team) {
    //         return
    //     }
    //     if (!i.email) {
    //         return
    //     }
    //     await sendSelectedTeamMail(i.Team?.teamName, i.email)
    // }
}
