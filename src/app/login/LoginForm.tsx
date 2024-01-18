'use client';
import { useState, FormEvent } from 'react';
import {useLocalStorage} from '../../hooks/localStorage';

export default function LoginForm() {

    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useLocalStorage<null | {token:string, expires:number; type:string}>('token', null);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            const response = await fetch("https://backend-universe.deno.dev/auth/authorize", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            setToken(data);
            console.log(data);
            fetch('/api', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({token: data.token, type: data.type})
            })
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="email"
          name="email"
          className="text-slate-950 w-full h-full  border-transparent border-4 focus:border-b-slate-950 p-5 focus:outline-none focus:"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="text-slate-950 w-full h-full  border-transparent border-4 focus:border-b-slate-950 p-5 focus:outline-none"
        />
        <button
          className="bg-slate-900 text-white rounded-3xl p-4"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? "Cargando..." : "Iniciar sesión"}
        </button>
      </form>
    );
}