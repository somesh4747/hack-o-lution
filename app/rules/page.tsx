import { title } from '@/components/primitives'
import cn from '@/utils/cn'
import { Chip } from '@nextui-org/chip'

export default function AboutPage() {
    return (
        <div className="my-9 flex flex-col justify-start items-center">
            <h1 className={cn('text-5xl tracking-wide')}>Rules</h1>
            <ol className="list-decimal md:text-2xl md:w-[800px] font-sans space-y-4 px-8 mt-3 md:px-4">
                <li>
                    <div className="md:text-2xl text-left  font-bold">
                        ***In matters of violating any rules, the decision of
                        the faculty Coordinators and Admins is final. Any
                        misbehavior of any teammate will lead to the
                        disqualification of the team***.
                    </div>
                </li>
                <li>
                    <div className="md:text-xl  text-left  ">
                        Participants must bring their own devices and
                        accessories to the event, the college will not provide
                        any machines.
                    </div>
                </li>
                <li>
                    <div className="md:text-xl text-left  ">
                        It is dedicated to creating a secure, comfortable, and
                        harassment-free environment for all. Please be
                        respectful; harassment and abuse will not be allowed.
                    </div>
                </li>
                <li>
                    <div className="md:text-xl  text-left  ">
                        No plagiarism or re-using of past work:
                        <ol className="list-disc pl-8 space-y-4">
                            <li>
                                <div className="md:text-xl  text-left  ">
                                    We encourage you to submit only projects
                                    prepared for the duration of the hackathon.
                                    However, suppose you decide to submit
                                    projects consisting of re-used code or
                                    re-submit a project that you have already
                                    submitted to any other hackathon. In that
                                    case, you are to disclose such previous use
                                    and its extent with the submission.
                                </div>
                            </li>
                            <li>
                                <div className="md:text-xl  text-left  ">
                                    If, upon inspection, it is found that the
                                    project has re-used code that was not
                                    disclosed with the submission, the organizer
                                    may ask the participant to point out
                                    similarities and differences between the old
                                    and new work and/or disqualify the
                                    submission from winning awards
                                    automatically.
                                </div>
                            </li>
                        </ol>
                    </div>
                </li>
            </ol>
        </div>
    )
}
