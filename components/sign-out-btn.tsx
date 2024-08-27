'use client'

import { signOut } from '@/auth'
import { Button } from '@nextui-org/button'

export default function SignoutButton() {
    return (
        <div>
            <Button onClick={async () => await signOut()}>Signout</Button>
        </div>
    )
}
