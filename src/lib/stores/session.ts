import { writable } from "svelte/store";

export const session = writable<{
    user: null | {
        avatar: string | null
        created_at: string | null
        displayname: string | null
        email: string
        id: string
        username: string
      },
    token: null | string,
    expires: null | number,
}>({
    user: null,
    token: null,
    expires: null,
}); 