import { Code } from '@nextui-org/code'
import React from 'react'
import { Snippet } from '@nextui-org/snippet'
import Link from 'next/link'

export default function Information() {
    return (
        <div className="w-full  my-6 bg-transparent">
            <div className="flex flex-col justify-center items-center ">
                <div className="md:text-7xl text-6xl font-medium">about</div>
                <div className="max-w-[900px] text-2xl h-auto p-4 tracking-wide text-center ">
                    &quot;HACK&#123;<span className="text-green-300">0</span>
                    &#125;LUTION&quot; is a open theme hackathon at the Ashram
                    Campus, it&rsquo;s the great opportunities for all tech
                    enthusiasts to dive into a 12 hour long marathon of
                    creativity, innovation, coding and collaboration. Whether
                    you&rsquo;re an experienced developer or just starting your
                    journey, Hackolution provides you a platform to challenge
                    yourself, learn new skills and also give the chance to work
                    on real&#45;world problems. The event is a 12 hour long
                    hackathon scheduled to be held at the Institute of
                    Engineering and Management, Kolkata &#45; Ashram Campus on{' '}
                    <span className=" text-green-300 tracking-wider">
                        11th November 2024.{' '}
                    </span>
                    This event encourages projects from various domains like Web
                    Development, App Development, Web3 and Blockchain,
                    Artificial Intelligence, Machine Learning, Cloud Computing
                    and many more. This event offers exciting prizes and
                    provides networking opportunities for all participants.
                </div>
            </div>
            <div className="flex justify-center items-center mt-8">
                <Snippet hideCopyButton hideSymbol variant="bordered">
                    <span className=" text-xl">
                        You don&apos;t know{' '}
                        <Code color="danger" className="text-xl">
                            <Link href={'/rules'}>Rules ?</Link>
                        </Code>
                    </span>
                </Snippet>
            </div>
        </div>
    )
}
