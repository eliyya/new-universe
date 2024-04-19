'use client'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useState, FormEvent } from 'react'

export interface LoginFormProps {
    onSubmit: (email: string, password: string) => Promise<{error:null}>
}
export function LoginForm(props: LoginFormProps) {
    const [isLoading, setIsLoading] = useState(false)

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        if (typeof email !== 'string' || typeof password !== 'string') {
            setIsLoading(false)
            return
        }
        const { error } = await props.onSubmit(email, password)
        if (error) {
            alert(error)
        }
        setIsLoading(false)
    }
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
            <Input
                required
                type="email"
                placeholder="email"
                name="email"
            />
            <Input
                required
                type="password"
                placeholder="password"
                name="password"
            />
            <Button
                disabled={isLoading}
                type="submit"
            >
                {isLoading ? 'Cargando...' : 'Iniciar sesión'}
            </Button>
        </form>
    )
}