// 'use server'

import { testSelected } from '@/actions/test'

export default async function TestPage() {
    return (
        <div>
            <form
                action={async () => {
                    'use server'
                    await testSelected()
                }}
            >
                <button>send</button>
            </form>
        </div>
    )
}
