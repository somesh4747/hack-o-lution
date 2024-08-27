import { auth, signOut } from '@/auth'
import db from '@/utils/db'
import { Button } from '@nextui-org/button'
import { revalidatePath } from 'next/cache'
import { Avatar } from '@nextui-org/avatar'

export default async function DashBoard() {
    const session = await auth()
    if (!session?.user?.email)
        return (
            <div className="text-4xl flex justify-center items-center">
                Invalid Team
            </div>
        )

    const team = await db.team.findFirst({
        where: {
            email: session.user.email,
        },
    })
    const members = await db.member.findMany({
        where: {
            teamId: team?.id,
        },
    })

    return (
        <div className="min-h-screen flex justify-start items-center flex-col mt-10 ">
            {/* title of the page */}
            <h1 className="md:text-8xl text-6xl tracking-wide mt-7">
                DashBoard
            </h1>
            <form
                action={async () => {
                    'use server'
                    await signOut()
                    revalidatePath('/dashBoard')
                }}
            >
                <Button
                    className="my-5 text-xl"
                    type="submit"
                    variant="shadow"
                    color="danger"
                >
                    log out
                </Button>
            </form>
            {/* ------------------------------------------------------------ */}
            <div className="text-xl flex flex-col justify-center items-center mx-4 text-center tracking-wide">
                <div>
                    Team id :{' '}
                    <span className="!text-sky-400 font-sans">{team?.id}</span>
                </div>
                <div>
                    Team Name :{' '}
                    <span className="!text-green-400">{team?.teamName}</span>
                </div>

                <div className="flex justify-center flex-wrap gap-3 mt-4 flex-col md:flex-row">
                    {members.map((mem, index) => (
                        <div
                            key={index}
                            className="flex-col flex justify-center items-center"
                        >
                            <Avatar
                                // name={mem.name}
                                showFallback
                                className="md:w-40 md:h-40 w-16 h-16 "
                            />
                            <p>{mem.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* logout button */}
            <div></div>
        </div>
    )
}
