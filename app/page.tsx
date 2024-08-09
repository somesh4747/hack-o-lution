'use client'
import { Link } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { motion } from 'framer-motion'

export default function Home() {
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
                    className="md:text-9xl font-medium text-6xl "
                >
                    HACK&#123;0&#125;LUTION
                </motion.div>
            </div>

            <div className="mt-8">
                <Snippet hideCopyButton hideSymbol variant="bordered">
                    <span className="text-2xl">
                        Get started with{' '}
                        <Code color="primary" className="text-2xl">
                            IEM/Hack-0-luiton
                        </Code>
                    </span>
                </Snippet>
            </div>
        </section>
    )
}
