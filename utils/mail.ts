import { Resend } from 'resend'
import ResgistrationMailTemplete from '@/components/mails/registration-mail'
import SelctedTeamMailTemplate from '@/components/mails/select'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendRegistrationEmail = async (
    email: string[],
    name: string[],
    teamName: string,
    leaderMail: string,
    pass: string
) => {
    await resend.emails.send({
        from: 'Team HACK{0}LUTION <hack@someshdev.in>',
        to: email,
        subject: 'HACK{O}LUTION Registration',
        react: ResgistrationMailTemplete({
            name: name,
            teamName: teamName,
            leaderMail: leaderMail,
            leaderMobile: pass,
        }),
    })
}
export const sendSelectedTeamMail = async (
    teamName: string,
    leaderMail: string
) => {
    await resend.emails.send({
        from: 'Team HACK{0}LUTION <hack@someshdev.in>',
        to: leaderMail,
        subject: 'HACK{O}LUTION Selection',
        react: SelctedTeamMailTemplate({ teamName }),    
    })
}
