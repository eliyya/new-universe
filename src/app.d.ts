// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			user: User
		}
		// interface Platform {}
	}
}

export type User = {
	avatar: string | null;
	created_at: string | null;
	displayname: string | null;
	email: string;
	id: string;
	username: string;
}

export {};