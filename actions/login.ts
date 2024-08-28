'use server'
import { signIn } from '@/auth'
import db from '@/utils/db'
import { AuthError } from 'next-auth'
import { revalidatePath } from 'next/cache'

export async function login(
    prev: unknown,
    formData: FormData
): Promise<{ error?: string | undefined; success?: string | undefined }> {
    const email = formData.get('email')?.toString()
    const mobile = formData.get('mobile')?.toString()

    try {
        const team = await signIn('credentials', {
            email,
            mobile,
            redirectTo: '/dashboard',
        })
        revalidatePath('/dashboard')
        return {
            success: 'Logged in',
        }
    } catch (error) {
        if (error instanceof AuthError)
            switch (error.type) {
                case 'CredentialsSignin':
                    return {
                        error: 'invalid credentials',
                    }
            }

        throw error
    }
}
