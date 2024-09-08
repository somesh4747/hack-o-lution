import React from 'react'
import { Card, CardFooter, Button } from '@nextui-org/react'
import Image from 'next/image'
import { Tooltip } from '@nextui-org/react'
import Link from 'next/link'

export default function Admins() {
    return (
        <div className="flex justify-center items-center flex-wrap gap-4">
            <BioCards
                img="/admins/somesh.jpg"
                name="Somesh Karmakar"
                duty={
                    <div className="px-1 py-2 tracking-widest">
                        <div className="text-xl font-bold">
                            Full Stack Developer
                        </div>
                        <div className="text-small">
                            Typescript, React, Nextjs, Prisma
                        </div>
                    </div>
                }
                linkedin="https://www.linkedin.com/in/somesh-karmakar-a75328291/"
                role_="Registration head"
            />

            <BioCards
                img="/admins/souvik.jpg"
                name="Souvik Ghosh"
                duty={
                    <div className="px-1 py-2 tracking-widest">
                        <div className="text-xl font-bold">AI-ML and IoT</div>
                        <div className="text-small">
                            TensorFlow, PyTorch, Raspberry Pi
                        </div>
                    </div>
                }
                linkedin="https://www.linkedin.com/in/souvik-ghosh-1bb26a282/"
                role_="Registration head"
            />

            <BioCards
                img="/admins/soumodip4.jpg"
                name="Soumodip Das"
                duty={
                    <div className="px-1 py-2 tracking-widest">
                        <div className="md:text-xl font-bold">
                            Front-End Developer
                        </div>
                        <div className="text-tiny md:text-small">
                            Html, css, JS, python, cpp
                        </div>
                    </div>
                }
                linkedin="https://www.linkedin.com/in/soumodip-das-418abb270/"
                role_="Manager"
            />

            <BioCards
                img="/admins/rohan4.jpg"
                name="Rohan Sinha"
                duty={
                    <div className="px-1 py-2 tracking-widest">
                        <div className="md:text-xl font-bold">
                            Front-End Developer
                        </div>
                        <div className="text-tiny md:text-small">React</div>
                    </div>
                }
                linkedin="https://www.linkedin.com/in/rohan-sinha-0b926225a/"
                role_="Logistics"
            />
        </div>
    )
}

export function BioCards({
    name,
    duty,
    img,
    linkedin,
    role_,
}: {
    name: string
    duty?: React.ReactNode
    img?: string
    linkedin: string
    role_?: string
}) {
    // console.log(window.matchMedia('(max-width: 400px)').matches ? 400 : 600)

    return (
        <Tooltip content={duty} color="foreground" className="capitalize ">
            <div className="border-none relative rounded-2xl overflow-hidden">
                <img
                    alt={name}
                    className="object-cover h-[400px]"
                    height={400}
                    src={img}
                    width={250}
                />
                <Link href={linkedin} target="_blank">
                    <Tooltip
                        content="Linkedin"
                        className="tracking-widest"
                        color="primary"
                    >
                        <div className=" before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10  backdrop-blur-lg flex items-start justify-center flex-col">
                            <p className=" text-white text-2xl px-3">{name}</p>
                            {/* <br /> */}
                            <p className="px-3 text-[1rem] font-sans capitalize">
                                {role_}
                            </p>
                        </div>
                    </Tooltip>
                </Link>
            </div>
        </Tooltip>
    )
}
