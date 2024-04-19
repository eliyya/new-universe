'use client'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { FormEvent, useState } from 'react'

export interface RegisterFormProps {
    onSubmit: (email: string, password: string) => Promise<{error: null}>
}
export function RegisterForm(props: RegisterFormProps) {
    const [isLoading, setIsLoading] = useState(false)
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        const form = new FormData(event.currentTarget)
        const email = form.get('email') as string
        const password = form.get('password') as string
        const confirmPassword = form.get('confirmPassword') as string
        if (password !== confirmPassword) {
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
            <Input required type="email" name="email" placeholder="email" />
            <Input required type="password" name="password" placeholder="password" />
            <Input required type="password" name="confirmPassword" placeholder="confirm password"/>
            <Button type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : 'Submit'}</Button>
        </form>
    )
}