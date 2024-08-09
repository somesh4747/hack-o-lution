'use client'
import { Link } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { motion } from 'framer-motion'
import { useTimer } from 'react-timer-hook'

export default function Home() {
    // using the event date to create a timer
    const eventDate = new Date('September 14, 2024 0:00:00')
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
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="flex items-center max-w-lg text-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 10,
                    }}
                    className="md:text-9xl font-medium text-6xl mt-9"
                >
                    HACK&#123;0&#125;LUTION
                </motion.div>
            </div>
            <div>
                <div style={{ fontSize: '100px' }}>
                    <span>{days}</span>:<span>{hours}</span>:
                    <span>{minutes}</span>:<span>{seconds}</span>
                </div>
            </div>
            <div className="mt-8">
                <Snippet hideCopyButton hideSymbol variant="bordered">
                    <span className="text-2xl">
                        Get started with{' '}
                        <Code color="primary" className="text-2xl">
                            IEM/Hack-0-lution
                        </Code>
                    </span>
                </Snippet>
            </div>
        </section>
    )
}
