import { auth } from '@/auth'
import db from '@/utils/db'
import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
    const members = await db.member.findMany()

    if (!members)
        return NextResponse.json({ error: 'not found' }, { status: 500 })

    return NextResponse.json(
        { total_no_members: members.length, members: members },
        { status: 200 }
    )
}
