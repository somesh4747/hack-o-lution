import { Code } from '@nextui-org/code'
import React from 'react'
import { Snippet } from '@nextui-org/snippet'
import Link from 'next/link'

export default function Information() {
    return (
        <div className="w-full  my-6 bg-transparent">
            <div className="flex flex-col justify-center items-center ">
                <div className="text-7xl font-medium">about</div>
                <div className="max-w-[900px] text-2xl h-auto p-4 tracking-wide text-center ">
                    "HACK&#123;<span className="text-green-300">0</span>
                    &#125;LUTION" is the first time-ever hackathon at the Ashram
                    Campus, it&rsquo;s the great opportunities for all tech
                    enthusiasts to dive into a 12 hour long marathon of
                    creativity, innovation, coding and collaboration. Whether
                    you&rsquo;re an experienced developer or just starting your
                    journey, Hackolution provides you a platform to challenge
                    yourself, learn new skills and also give the chance to work
                    on real-world problems. The event is a 12 hour long
                    hackathon scheduled to be held at the Institute of
                    Engineering & Management, Kolkata – Ashram Campus in mid
                    September. This event encourages projects from various
                    domains like Web Development, App Development, Web3 &
                    Blockchain, Artificial Intelligence, Machine Learning, Cloud
                    Computing and many more. This event offers exciting prizes
                    and build networking opportunities for all participants.
                </div>
            </div>
            <div className="flex justify-center items-center mt-8">
                <Snippet hideCopyButton hideSymbol variant="bordered">
                    <span className=" md:text-xl">
                        You don't know{' '}
                        <Code color="danger" className="md:text-xl">
                            <Link href={'/rules'}>Rules ?</Link>
                        </Code>
                    </span>
                </Snippet>
            </div>
        </div>
    )
}
