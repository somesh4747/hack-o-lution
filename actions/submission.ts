'use server'
import db from '@/utils/db'

export default async function Submission(
    prev: unknown,
    formData: FormData
): Promise<{ error?: string | undefined; success?: string | undefined }> {
    const projectLink = formData.get('projectLink')?.toString()
    const teamId = formData.get('teamId')?.toString()
    const githubLink: string | undefined = formData
        .get('githubLink')
        ?.toString()

    // console.log(formData)

    if (!projectLink) return { error: 'provide the project link' }
    if (!githubLink) return { error: 'provide the github Link' }

    // console.log(teamId, projectLink, githubLink)

    const team = await db.team.findFirst({
        where: {
            id: teamId,
        },
    })
    // console.log(team)

    if (!team) return { error: 'No valid Team!! Error!!' }

    // if (team.hostedLink != null || team.projectLink != null) {
    //     return { error: 'You have already Submitted' }
    // }

    const submit = await db.team.update({
        where: {
            id: teamId,
        },
        data: {
            hostedLink: projectLink,
            projectLink: githubLink,
        },
    })

    if (!submit) return { error: 'Not Submitted, try again' }

    return { success: 'Submitted Successfully' }
}
