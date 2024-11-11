'use client'
import { Input } from '@nextui-org/input'
import React, { useState } from 'react'
export const dynamic = 'force-dynamic'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Link,
    Image,
    Button,
} from '@nextui-org/react'
import { Textarea } from '@nextui-org/react'

import { Select, SelectSection, SelectItem } from '@nextui-org/react'

import Submission from '@/actions/submission'
import { IoMail } from 'react-icons/io5'
import { useFormState, useFormStatus } from 'react-dom'
import { RiTeamFill } from 'react-icons/ri'
import { FaGithub, FaProjectDiagram, FaUserCircle } from 'react-icons/fa'
import { VscError } from 'react-icons/vsc'
import { IoMdPersonAdd } from 'react-icons/io'
import { FaPhone } from 'react-icons/fa6'
import { GithubIcon } from './icons'

export default function RegisterPage({ teamId }: { teamId?: string }) {
    const [response, action] = useFormState(Submission, {})

    return (
        <div className="">
            <div className="flex flex-col justify-start items-center">
                <form action={action}>
                    <Card className="md:w-[600px] my-9" shadow="lg">
                        <CardHeader className="flex gap-3 md:text-6xl text-5xl justify-center items-center">
                            <div className="flex flex-col">
                                <p className="text-md tracking-wide">
                                    Project Submission
                                </p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody className="font-mono">
                            <div className="gap-2 flex justify-center items-start flex-col ">
                                <input
                                    type="text"
                                    name="teamId"
                                    id=""
                                    value={teamId}
                                    className="hidden"
                                />
                                <Input
                                    size="lg"
                                    type="text"
                                    label="Project link"
                                    variant="underlined"
                                    aria-autocomplete="none"
                                    isRequired
                                    name="projectLink"
                                    labelPlacement="outside"
                                    placeholder="Project live link"
                                    description="if don't, then write NA"
                                    radius="sm"
                                    required
                                    startContent={<FaProjectDiagram />}
                                />

                                {/* --------- team done  && leader done ---------*/}
                                <Input
                                    size="lg"
                                    type="text"
                                    label="github link"
                                    name="githubLink"
                                    radius="sm"
                                    startContent={<GithubIcon />}
                                    variant="underlined"
                                    required
                                    isRequired
                                />

                                {/* <Textarea
                                    name="remarks"
                                    label="Feedback"
                                    variant="faded"
                                    size="lg"
                                    radius="sm"
                                    labelPlacement="outside"
                                    placeholder="Any Feedback"
                                    className="text-3xl"
                                /> */}
                            </div>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <SubmitButton />
                            <p className="mx-4 text-red-500">
                                {response.error ? (
                                    <span className="flex justify-center items-center">
                                        <VscError className="scale-150 mx-2 inline-block" />
                                        {response.error}
                                    </span>
                                ) : (
                                    ''
                                )}
                            </p>
                            <p className="px-2 text-green-500">
                                {response.success ? (
                                    <span className="flex justify-center items-center">
                                        <FaUserCircle className="inline-block mx-2 scale-150" />
                                        {response?.success}
                                    </span>
                                ) : (
                                    ''
                                )}
                            </p>
                        </CardFooter>
                    </Card>
                </form>
            </div>
        </div>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <Button
            type="submit"
            className="text-xl"
            disabled={pending}
            isLoading={pending}
        >
            Submit
        </Button>
    )
}
