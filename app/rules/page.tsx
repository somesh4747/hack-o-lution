import { title } from '@/components/primitives'
import cn from '@/utils/cn'
import { Chip } from '@nextui-org/chip'

export default function AboutPage() {
    return (
        <div className="h-screen flex flex-col justify-start items-center">
            <h1 className={cn('text-5xl tracking-wide')}>Rules</h1>
            <ol className="list-decimal text-2xl max-w-[800px] px-3">
                <li>
                    <div className="text-xl md:text-left font-mono text-center">
                        In matters involving violating any rules, the decisions
                        of the faculty Coordinators and admin are final. Any
                        misbehavior of any teammate will lead to the
                        disqualification of the team.
                    </div>
                </li>
            </ol>
        </div>
    )
}
