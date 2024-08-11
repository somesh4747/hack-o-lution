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
import register from '@/actions/register'

import { IoMail } from 'react-icons/io5'
import { useFormState, useFormStatus } from 'react-dom'
import { RiTeamFill } from 'react-icons/ri'
import { FaGithub, FaUserCircle } from 'react-icons/fa'
import { VscError } from 'react-icons/vsc'
import { IoMdPersonAdd } from 'react-icons/io'
import { FaPhone } from 'react-icons/fa6'

export default function RegisterPage() {
    const [teamSize, setTeamSize] = useState(2)
    const [response, action] = useFormState(register, {})

    return (
        <div className="">
            <div className="flex flex-col justify-start items-center">
                <form action={action}>
                    <Card className="md:w-[600px] my-9" shadow="lg">
                        <CardHeader className="flex gap-3 md:text-6xl text-5xl ">
                            <div className="flex flex-col">
                                <p className="text-md tracking-wide">
                                    Registration
                                </p>
                                <p className="text-small text-default-500">
                                    HACK&#123;0&#125;LUTION
                                </p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody className="font-mono">
                            <div className="gap-2 flex justify-center items-start flex-col ">
                                {/* team size selection */}
                                <Select
                                    label="Select Team Size"
                                    required
                                    isRequired
                                    className="my-5 "
                                    name="size"
                                >
                                    <SelectItem
                                        key={'2'}
                                        className="font-mono"
                                        onClick={() => setTeamSize(2)}
                                    >
                                        2
                                    </SelectItem>
                                    <SelectItem
                                        key={'3'}
                                        className="font-mono"
                                        onClick={() => setTeamSize(3)}
                                    >
                                        3
                                    </SelectItem>
                                    <SelectItem
                                        key={'4'}
                                        className="font-mono"
                                        onClick={() => setTeamSize(4)}
                                    >
                                        4
                                    </SelectItem>
                                </Select>
                                {/* ---------select size done--------- */}

                                <Input
                                    size="lg"
                                    type="text"
                                    label="Team Name"
                                    variant="underlined"
                                    aria-autocomplete="none"
                                    isRequired
                                    name="teamName"
                                    labelPlacement="outside"
                                    placeholder="Enter Team Name"
                                    className="w-[300px]"
                                    radius="sm"
                                    required
                                    startContent={<RiTeamFill />}
                                />

                                {/* selecting the institute */}
                                <Select
                                    label="Select Institute"
                                    name="college"
                                    isRequired
                                    description="Only Students from IEM/Ashram is Allowed"
                                >
                                    <SelectItem
                                        key={'iem'}
                                        className="font-mono"
                                    >
                                        Institute of Engineering & Management
                                    </SelectItem>
                                </Select>

                                {/* --------- team done  && leader done ---------*/}
                                <Input
                                    size="lg"
                                    type="text"
                                    label="Leader Name"
                                    name="leaderName"
                                    radius="sm"
                                    // placeholder="Enter leader Name"
                                    // labelPlacement="outside"
                                    // startContent={<IoMdPersonAdd />}
                                    variant="flat"
                                    className="w-[300px] "
                                    required
                                    description="Team Member 1"
                                    isRequired
                                />
                                <Input
                                    size="lg"
                                    type="email"
                                    label="Leader Email"
                                    variant="underlined"
                                    name="leaderEmail"
                                    isRequired
                                    startContent={<IoMail />}
                                    required
                                />
                                <Input
                                    size="lg"
                                    type="text"
                                    label="Leader github"
                                    name="leaderGithub"
                                    radius="sm"
                                    // placeholder="Enter leader Name"
                                    // labelPlacement="outside"
                                    variant="underlined"
                                    startContent={<FaGithub />}
                                    className="w-[350px] "
                                    required
                                    description="Github Profile Link"
                                    isRequired
                                />
                                <Input
                                    size="lg"
                                    type="number"
                                    label="Leader Mobile"
                                    name="mobile"
                                    // maxLength={10}

                                    radius="sm"
                                    // placeholder="Enter leader Name"
                                    // labelPlacement="outside"
                                    variant="underlined"
                                    startContent={<FaPhone />}
                                    className="w-[350px] "
                                    required
                                    description="Github Profile Link"
                                    isRequired
                                />

                                <Input
                                    size="lg"
                                    type="text"
                                    label="Team Member 2"
                                    // labelPlacement="outside"
                                    variant="flat"
                                    radius="sm"
                                    name="memberOneName"
                                    isRequired
                                    required
                                    className="w-[300px]"
                                />
                                <Input
                                    size="lg"
                                    type="email"
                                    label="Member 2 Email"
                                    variant="underlined"
                                    isRequired
                                    required
                                    startContent={<IoMail />}
                                    // aria-autocomplete="none"
                                    name="memberOneEmail"
                                />

                                <Input
                                    size="lg"
                                    type="text"
                                    label="Member 2 github"
                                    name="memberOneGithub"
                                    radius="sm"
                                    // placeholder="Enter leader Name"
                                    // labelPlacement="outside"
                                    variant="underlined"
                                    startContent={<FaGithub />}
                                    className="w-[350px] "
                                    required
                                    description="Github Profile Link"
                                    isRequired
                                />
                                {teamSize != 2 ? (
                                    teamSize == 3 ? (
                                        <>
                                            <Input
                                                size="lg"
                                                type="text"
                                                label="Team Member 3"
                                                variant="flat"
                                                radius="sm"
                                                name="memberTwoName"
                                                isRequired
                                                className="w-[300px]"
                                            />
                                            <Input
                                                size="lg"
                                                type="email"
                                                label="Member 3 Email"
                                                variant="underlined"
                                                // aria-autocomplete="none"
                                                isRequired
                                                startContent={<IoMail />}
                                                name="memberTwoEmail"
                                                className=""
                                            />
                                            <Input
                                                size="lg"
                                                type="text"
                                                label="Member 3 github"
                                                name="memberTwoGithub"
                                                radius="sm"
                                                // placeholder="Enter leader Name"
                                                // labelPlacement="outside"
                                                variant="underlined"
                                                startContent={<FaGithub />}
                                                className="w-[350px] "
                                                required
                                                description="Github Profile Link"
                                                isRequired
                                            />
                                        </>
                                    ) : (
                                        <>
                                            {' '}
                                            <Input
                                                size="lg"
                                                type="text"
                                                label="Team Member 3"
                                                variant="flat"
                                                isRequired
                                                radius="sm"
                                                name="memberTwoName"
                                                className="w-[300px]"
                                            />
                                            <Input
                                                size="lg"
                                                type="email"
                                                label="Member 3 Email"
                                                variant="underlined"
                                                isRequired
                                                startContent={<IoMail />}
                                                name="memberTwoEmail"
                                                className=""
                                            />
                                            <Input
                                                size="lg"
                                                type="text"
                                                label="Member 3 github"
                                                name="memberTwoGithub"
                                                radius="sm"
                                                // placeholder="Enter leader Name"
                                                // labelPlacement="outside"
                                                variant="underlined"
                                                startContent={<FaGithub />}
                                                className="w-[350px] "
                                                required
                                                description="Github Profile Link"
                                                isRequired
                                            />
                                            <Input
                                                size="lg"
                                                type="text"
                                                label="Team Member 4"
                                                variant="flat"
                                                radius="sm"
                                                // labelPlacement="outside"
                                                name="memberThreeName"
                                                className="w-[300px]"
                                                isRequired
                                            />
                                            <Input
                                                size="lg"
                                                type="email"
                                                label="Member 4 Email"
                                                // labelPlacement="outside"
                                                variant="underlined"
                                                // aria-autocomplete="none"
                                                startContent={<IoMail />}
                                                name="memberThreeEmail"
                                                isRequired
                                                className=""
                                            />
                                            <Input
                                                size="lg"
                                                type="text"
                                                label="Member 4 github"
                                                name="memberThreeGithub"
                                                radius="sm"
                                                variant="underlined"
                                                startContent={<FaGithub />}
                                                className="w-[350px]"
                                                required
                                                description="Github Profile Link"
                                                isRequired
                                            />
                                        </>
                                    )
                                ) : (
                                    ''
                                )}
                                <Textarea
                                    name="idea"
                                    label="Project Idea"
                                    variant="faded"
                                    isRequired
                                    required
                                    size="lg"
                                    radius="sm"
                                    labelPlacement="outside"
                                    placeholder="Enter Your project idea"
                                    className="text-3xl"
                                />
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
            Register
        </Button>
    )
}
