import { auth } from '@/auth'
import db from '@/utils/db'
import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
    const team = await db.team.findMany()

    if (!team) return NextResponse.json({ error: 'not found' }, { status: 500 })

    return NextResponse.json(
        { total_no_teams: team.length, teams: team },
        { status: 200 }
    )
}
