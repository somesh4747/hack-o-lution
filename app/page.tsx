'use client'
import { Link } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { motion, Variants } from 'framer-motion'
import { useTimer } from 'react-timer-hook'
import Information from '@/components/information'

export default function Home() {
    // using the event date to create a timer
    const eventDate = new Date('September 14, 2024 9:00:00')
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp: eventDate })

    const ani: Variants = {
        hidden: { opacity: 0, y: 80 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                duration: 1.5,
                staggerChildren: 0.1,
            },
        },
    }
    return (
        <div>
            <section
                className={`flex flex-col items-center justify-center gap-4 my-[150px]`}
            >
                <div>
                    {/* <img
                    src="/hero.jpg"
                    alt="hero image"
                    className="absolute inset-0 w-full  mix-blend-multiply"
                    /> */}
                </div>
                <div className="flex items-center text-center justify-center">
                    <motion.div
                        variants={ani}
                        initial="hidden"
                        animate="show"
                        className="md:text-[10rem] font-medium text-6xl mt-9 z-50"
                    >
                        <motion.span variants={ani}>H</motion.span>
                        <motion.span variants={ani}>A</motion.span>
                        <motion.span variants={ani}>C</motion.span>
                        <motion.span variants={ani}>K</motion.span>
                        <motion.span variants={ani}>&#123;</motion.span>
                        <motion.span variants={ani} className="text-green-400">
                            0
                        </motion.span>
                        <motion.span variants={ani}>&#125;</motion.span>
                        <motion.span variants={ani}>L</motion.span>
                        <motion.span variants={ani}>U</motion.span>
                        <motion.span variants={ani}>T</motion.span>
                        <motion.span variants={ani}>I</motion.span>
                        <motion.span variants={ani}>O</motion.span>
                        <motion.span variants={ani}>N</motion.span>
                        {/* HCK&#123;0&#125;LUTION */}
                    </motion.div>
                </div>
                <div>
                    <div className="text-3xl md:text-7xl z-50 relative text-yellow-100">
                        <span>{days}</span>.<span className="">{hours}</span>.
                        <span>{minutes}</span>.
                        <span className="">{seconds}</span>
                    </div>
                </div>
                <div className="mt-8 z-50 backdrop-blur-xl">
                    <Snippet hideCopyButton hideSymbol variant="bordered">
                        <span className=" md:text-xl">
                            Are You Excited{' '}
                            <Code color="danger" className="md:text-xl">
                                IEM/Ashram ?
                            </Code>
                        </span>
                    </Snippet>
                </div>
            </section>
            <section>
                <Information />
            </section>
            <section>
                
            </section>
        </div>
    )
}
