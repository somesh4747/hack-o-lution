import React from 'react'
import { Card, CardHeader, CardBody, Button } from '@nextui-org/react'
import Image from 'next/image'

export default function AboutIdeas() {
    return (
        <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
            <Card className="col-span-12 sm:col-span-4 h-[300px] tracking-wide">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">
                        What to Create
                    </p>
                    <h4 className="text-white font-medium text-2xl">
                        Open Innvovation
                    </h4>
                </CardHeader>
                <Image
                    width={400}
                    height={400}
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="/ideas/brain.png"
                />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">
                        AI/ML
                    </p>
                    <h4 className="text-white font-medium text-2xl capitalize">
                        artificial intelligence &amp; machine learning
                    </h4>
                </CardHeader>
                <Image
                    width={400}
                    height={400}
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="/ideas/ai.jpg"
                />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">
                        Health-care
                    </p>
                    <h4 className="text-white font-medium text-2xl">
                        Digital Healthcare Platforms
                    </h4>
                </CardHeader>
                <Image
                    width={400}
                    height={400}
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="/ideas/health.jpg"
                />
            </Card>
            <Card
                isFooterBlurred
                className="w-full h-[300px] col-span-12 sm:col-span-5"
            >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-black/60 uppercase font-bold">
                        Web
                    </p>
                    <h4 className="text-black font-medium text-2xl">
                        Full stack Development
                    </h4>
                </CardHeader>
                <Image
                    width={400}
                    height={400}
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src="/ideas/web2.jpg"
                />
            </Card>
            <Card
                isFooterBlurred
                className="w-full h-[300px] col-span-12 sm:col-span-7"
            >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">
                        Ed - tech
                    </p>
                    <h4 className="text-white/90 font-medium text-2xl">
                        Create your Ed-tech Platform
                    </h4>
                </CardHeader>
                <Image
                    width={400}
                    height={400}
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover"
                    src="/ideas/edu.jpg"
                />
            </Card>
        </div>
    )
}
