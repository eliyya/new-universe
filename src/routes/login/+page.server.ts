import type { Actions } from "./$types"
import { fail, redirect } from '@sveltejs/kit'
import { backendUrl } from '$lib/env'

export const actions = {
    default:async ({cookies, request}) => {
        const data = await request.formData()
        const email = data.get('email')
        const password = data.get('password')

        if (!email) {
			return fail(400, { email, missing: true })
		}

        const { token, expires } = (await fetch(backendUrl + "/auth/authorize", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user: email, password }),
        })
            .then((r) => r.json() as Promise<{ token: string; expires: number }>)
            .catch((e) => console.log(e))) ?? {}
    
        if (!token) {
			return fail(400, { email, incorrect: true })
		}

        cookies.set('token', token)
        if (expires) cookies.set('expires', `${expires}`)

        throw redirect(303, '/app')
    }
} satisfies Actions