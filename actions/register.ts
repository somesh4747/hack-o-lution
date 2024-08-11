'use server'
import db from '@/utils/db'
import { sendRegistrationEmail } from '@/utils/mail'

export default async function register(
    prev: unknown,
    formData: FormData
): Promise<{ error?: string | undefined; success?: string | undefined }> {
    const teamName = formData.get('teamName')?.toString()
    const teamSize: string | undefined = formData.get('size')?.toString()
    const leadername = formData.get('leaderName')?.toString()
    const projectIdea = formData.get('idea')?.toString()
    const leaderEmail = formData.get('leaderEmail')?.toString()
    const leaderGithub = formData.get('leaderGithub')?.toString()
    const leaderMobile = formData.get('mobile')?.toString()
    const memberOneName = formData.get('memberOneName')?.toString()
    const memberOneEmail = formData.get('memberOneEmail')?.toString()
    const memberOneGithub = formData.get('memberOneGithub')?.toString()
    const memberTwoName = formData.get('memberTwoName')?.toString()
    const memberTwoEmail = formData.get('memberTwoEmail')?.toString()
    const memberTwoGithub = formData.get('memberTwoGithub')?.toString()
    const memberThreeName = formData.get('memberThreeName')?.toString()
    const memberThreeEmail = formData.get('memberThreeEmail')?.toString()
    const memberThreeGithub = formData.get('memberThreeGithub')?.toString()

    // console.log(formData)

    if (!teamName) return { error: 'no team name' }
    if (!leadername) return { error: 'no leader name' }
    if (!leaderEmail) return { error: 'no leader email' }
    if (!teamSize) return { error: 'invalid team size' }
    if (!leaderMobile) return { error: 'enter Leader mobile number' }
    if (!memberOneEmail || !memberOneName)
        return { error: 'Provide member 2 properly' }

    const leader = await db.team.findFirst({
        where: {
            email: leaderEmail,
        },
    })
    // we will not consider multiple registration
    if (leader) return { error: 'Leader has Already Registered' }

    if (
        memberOneEmail &&
        memberOneName &&
        memberTwoEmail &&
        memberTwoName &&
        memberThreeEmail &&
        memberThreeName
    ) {
        const team = await db.team.create({
            data: {
                teamName: teamName,
                email: leaderEmail,
                idea: projectIdea,
                mobile: leaderMobile,
                members: {
                    createMany: {
                        data: [
                            {
                                name: leadername,
                                github: leaderGithub,
                                isleader: true,
                                email: leaderEmail,
                            },
                            {
                                name: memberOneName,
                                email: memberOneEmail,
                                github: memberOneGithub,
                            },
                            {
                                name: memberTwoName,
                                email: memberTwoEmail,
                                github: memberTwoGithub,
                            },
                            {
                                name: memberThreeName,
                                email: memberThreeEmail,
                                github: memberThreeGithub,
                            },
                        ],
                    },
                },
            },
        })

        await sendRegistrationEmail(leaderEmail, leadername, teamName)
        await sendRegistrationEmail(memberOneEmail, memberOneName, teamName)
        await sendRegistrationEmail(memberTwoEmail, memberTwoName, teamName)
        await sendRegistrationEmail(memberThreeEmail, memberTwoName, teamName)
        return { success: 'Registered Successfully' }
    }

    if (memberOneEmail && memberOneName && memberTwoEmail && memberTwoName) {
        const team = await db.team.create({
            data: {
                teamName: teamName,
                email: leaderEmail,
                mobile: leaderMobile,
                idea: projectIdea,
                members: {
                    createMany: {
                        data: [
                            {
                                name: leadername,
                                github: leaderGithub,
                                isleader: true,
                                email: leaderEmail,
                            },
                            {
                                name: memberOneName,
                                email: memberOneEmail,
                                github: memberOneGithub,
                            },
                            {
                                name: memberTwoName,
                                email: memberTwoEmail,
                                github: memberTwoGithub,
                            },
                        ],
                    },
                },
            },
        })

        await sendRegistrationEmail(leaderEmail, leadername, teamName)
        await sendRegistrationEmail(memberOneEmail, memberOneName, teamName)
        await sendRegistrationEmail(memberTwoEmail, memberTwoName, teamName)
        return { success: 'Registered Successfully' }
    }

    // /default two members
    // else{}
    const team = await db.team.create({
        data: {
            teamName: teamName,
            email: leaderEmail,
            mobile: leaderMobile,
            idea: projectIdea,
            members: {
                createMany: {
                    data: [
                        {
                            name: leadername,
                            github: leaderGithub,
                            isleader: true,
                            email: leaderEmail,
                        },
                        {
                            name: memberOneName,
                            email: memberOneEmail,
                            github: memberOneGithub,
                        },
                    ],
                },
            },
        },
    })
    // console.log(team)
    if (parseInt(teamSize) === 2) {
        await sendRegistrationEmail(leaderEmail, leadername, teamName)
        await sendRegistrationEmail(memberOneEmail, memberOneName, teamName)
    }

    return { success: 'Registered Successfully' }
}
