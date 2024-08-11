import { Resend } from 'resend'
import ResgistrationMailTemplete from '@/components/mails/registration-mail'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendRegistrationEmail = async (
    email: string[],
    name: string[],
    teamName: string
) => {
    await resend.emails.send({
        from: 'Team HACK{0}LUTION <hack@someshdev.in>',
        to: email,
        subject: 'HACK{O}LUTION Registration',
        react: ResgistrationMailTemplete({ name: name, teamName: teamName }),
    })
}
