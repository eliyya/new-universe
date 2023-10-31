import type { Actions } from "./$types"
import { fail, redirect } from '@sveltejs/kit'
import { backendUrl } from '$lib/env'

export const actions = {
    default:async ({ request }) => {
        const data = await request.formData()
        
        const email = data.get('email')
        const password = data.get('password')
        const repeat = data.get('repeat')

        if (!email || !password || !repeat) return fail(400, { email, missing: true })
        if (password !== repeat) return fail(400, { email, match: false })

        const {status, message} = await fetch(backendUrl + "/api/users/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user: email, password }),
        })
            .then(async (r) => ({ status: r.status, message: undefined }))
            .catch(e => ({ message: e.message, status: undefined }));
    
        if (!status) return fail(400, { email, incorrect: message })

        throw redirect(303, '/login')
    }
} satisfies Actions