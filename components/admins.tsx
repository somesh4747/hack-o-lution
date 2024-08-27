import React from 'react'
import { Card, CardFooter, Button } from '@nextui-org/react'
import Image from 'next/image'

export default function Admins() {
    return (
        <div className="flex justify-center items-center flex-wrap gap-4">
            <Cards img="/admins/somesh.jpg" name="Somesh Karmakar" duty="Web" />

            <Cards
                img="/admins/souvik.jpg"
                name="Souvik Ghosh"
                duty="AI / ML"
            />

            <Cards
                img="/admins/soumodip4.jpg"
                name="Soumodip Das"
                duty="Manager"
            />

            <Cards img="/admins/rohan4.jpg" name="Rohan Sinha" duty="Web" />
        </div>
    )
}

function Cards({
    name,
    duty,
    img,
}: {
    name: string
    duty?: string
    img: string
}) {
    // console.log(window.matchMedia('(max-width: 400px)').matches ? 400 : 600)

    return (
        <Card isFooterBlurred radius="lg" className="border-none">
            <img
                alt={name}
                className="object-cover h-[400px]"
                height={400}
                src={img}
                width={250}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 h-[80px]">
                <p className=" text-white text-2xl ">{name}</p>

                <br />
                <div className="bg-black/50 p-2 rounded-md ml-3">{duty}</div>
            </CardFooter>
        </Card>
    )
}
