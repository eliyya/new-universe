import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { backendUrl } from '$lib/env';

export const load: PageServerLoad = async ({ cookies }) => {
    
	const token = cookies.get('token')
	const expires = cookies.get('expires');
    console.log({token, expires});
    
	if (expires && +expires < Date.now()) throw redirect(303, '/login')
	if (!token) throw redirect(303, '/login')

    const user = await fetch(backendUrl + "/api/users/@me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((re) => re.json() as Promise<{
          avatar: string | null;
          created_at: string | null;
          displayname: string | null;
          email: string;
          id: string;
          username: string;
        }>)
      .catch((e) => console.log(e));
	
	if (user) return { user }
	else throw redirect(303, '/login')
};