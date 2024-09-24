import React from 'react'
import { Card, CardHeader, CardBody, Button } from '@nextui-org/react'
import Image from 'next/image'

export default function AboutIdeas() {
    return (
        <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 relative">
            <div className="col-span-12 sm:col-span-4 h-[300px] tracking-wide rounded-2xl relative overflow-hidden hover:scale-110 transition-all duration-250 z-[100]">
                <div className="absolute z-[100] top-1 flex-col !items-start py-4 px-4">
                    <p className="text-tiny text-white/60 uppercase font-bold">
                        What to Create
                    </p>
                    <h4 className="text-white font-medium text-2xl">
                        Open Innvovation
                    </h4>
                </div>
                <Image
                    width={400}
                    height={400}
                    alt="Card background"
                    className="z-[100] w-full h-full object-cover"
                    src="/ideas/brain.png"
                />
            </div>
            <div className="col-span-12 sm:col-span-4 h-[300px] relative rounded-2xl overflow-hidden hover:scale-110 transition-all duration-250 hover:z-[100]">
                <div className="absolute z-[100] top-1 flex-col !items-start py-4 px-4">
                    <p className="text-tiny text-white/60 uppercase font-bold">
                        AI/ML
                    </p>
                    <h4 className="text-white font-medium text-2xl capitalize">
                        artificial intelligence &amp; machine learning
                    </h4>
                </div>
                <Image
                    width={400}
                    height={400}
                    alt="Card background"
                    className="z-[100]  w-full h-full object-cover"
                    src="/ideas/ai.jpg"
                />
            </div>
            <div className="col-span-12 sm:col-span-4 h-[300px] relative rounded-2xl overflow-hidden hover:scale-110 transition-all duration-250 z-[100]">
                <div className="absolute z-[100] top-1 flex-col !items-start py-4 px-4">
                    <p className="text-tiny text-white/60 uppercase font-bold">
                        Health-care
                    </p>
                    <h4 className="text-white font-medium text-2xl">
                        Digital Healthcare Platforms
                    </h4>
                </div>
                <Image
                    width={400}
                    height={400}
                    alt="Card background"
                    className="z-[100] w-full h-full object-cover"
                    src="/ideas/health.jpg"
                />
            </div>
            <div className="w-full h-[300px] col-span-12 sm:col-span-5 relative rounded-2xl overflow-hidden hover:scale-110 transition-all duration-250 z-[100]">
                <div className="absolute z-[100] top-1 flex-col !items-start py-4 px-4">
                    <p className="text-tiny text-black/60 uppercase font-bold">
                        Web 2.0
                    </p>
                    <h4 className="text-black font-medium text-2xl">
                        Full stack Development
                    </h4>
                </div>
                <Image
                    width={400}
                    height={400}
                    alt="Card example background"
                    className="z-[100] w-full h-full scale-125 -translate-y-6 object-cover"
                    src="/ideas/web2.jpg"
                />
            </div>
            <div className="w-full h-[300px] col-span-12 sm:col-span-7 relative rounded-2xl overflow-hidden hover:scale-110 transition-all duration-250 z-[100]">
                <div className="absolute z-[100] top-1 flex-col !items-start py-4 px-4">
                    <p className="text-tiny text-white/60 uppercase font-bold">
                        Ed - tech
                    </p>
                    <h4 className="text-white/90 font-medium text-2xl">
                        Create your Ed-tech Platform
                    </h4>
                </div>
                <Image
                    width={400}
                    height={400}
                    alt="Relaxing app background"
                    className="z-[100] w-full h-full object-cover"
                    src="/ideas/edu.jpg"
                />
            </div>
        </div>
    )
}
