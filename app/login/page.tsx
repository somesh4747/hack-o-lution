'use client'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Input } from '@nextui-org/input'
import { Divider } from '@nextui-org/react'
import React from 'react'
import { FaPassport, FaPhone } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

import { signIn, signOut } from '@/auth'
import SignoutButton from '@/components/sign-out-btn'
import { useFormState, useFormStatus } from 'react-dom'
import { login } from '@/actions/login'
import { RiErrorWarningFill } from 'react-icons/ri'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const [response, action] = useFormState(login, {})
    return (
        <div className="min-h-screen">
            <div className="my-9  flex justify-center items-center m-6 text-xl">
                <form action={action} className="md:w-2/6">
                    <Card className="shadow-2xl py-2">
                        <CardHeader className="flex gap-3 md:text-6xl text-5xl ">
                            <div className="flex flex-col">
                                <p className="text-md tracking-wide">Login</p>
                                <p className="text-small text-default-500">
                                    HACK&#123;0&#125;LUTION
                                </p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody className="gap-3">
                            <Input
                                size="lg"
                                type="email"
                                label="Leader Email"
                                variant="flat"
                                name="email"
                                isRequired
                                startContent={<IoMail />}
                                radius="sm"
                                required
                            />
                            <Input
                                size="lg"
                                type="password"
                                label="password"
                                name="mobile"
                                radius="sm"
                                variant="flat"
                                startContent={<FaPassport />}
                                // className="w-[300px] "
                                required
                                isRequired
                            />
                        </CardBody>
                        {/* <Divider className="my-2" /> */}
                        <CardFooter>
                            <SubmitButton />
                        </CardFooter>
                        <div>{response?.success ? response.success : ''}</div>
                        <div className="text-red-500 text-xl p-3 flex justify-start gap-2 items-center">
                            {response?.error ? (
                                <RiErrorWarningFill className="inline-block" />
                            ) : (
                                ' '
                            )}
                            {response?.error ? response.error : ''}
                        </div>
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
            variant="shadow"
            className="w-full text-xl"
            disabled={pending}
            isLoading={pending}
        >
            Login
        </Button>
    )
}
