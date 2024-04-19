import { cookies } from 'next/headers'
import { RegisterForm, RegisterFormProps } from './RegisterForm'
import { redirect } from 'next/navigation'

export default function RegisterPage() {
    const register: RegisterFormProps['onSubmit'] = async (email, password) => {
        'use server'
        const response = await fetch('https://backend-universe.deno.dev/api/users/register', {
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
        })
        const data = await response.json() as { token: string, expires: number, type: string}
        cookies().set('token', data.token, {
            expires: new Date(data.expires),
        })
        redirect('/')
        return {error:null}
    }
    return (
        <main className="flex h-screen flex-1 flex-col items-center justify-center">
            <h1 className="h-16 text-4xl font-bold text-slate-950">
                Register
            </h1>
            <RegisterForm onSubmit={register} />
        </main>
    )
}