'use client';
import { FormEvent, useState } from "react";

export default function RegisterForm() {
    const [isLoading, setIsLoading] = useState(false);
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        const form = new FormData(event.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const confirmPassword = form.get('confirmPassword');

        if (
          !email ||
          !password ||
          !confirmPassword ||
          password !== confirmPassword
        ) {
          setIsLoading(false);
          return;
        }

        try {
            const response = await fetch("https://backend-universe.deno.dev/api/users/register", {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: { "Content-Type": "application/json" },
            });
            console.log(response);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
      <form onSubmit={onSubmit} className="flex flex-col gap-10">
        <label className="text-black">
          email
          <input type="email" name="email" placeholder="email" className="text-slate-950 w-full h-full  border-transparent border-4 rounded-2xl focus:border-b-slate-950 p-5 focus:outline-none " />
        </label>
        <label  className="text-black">
          password
          <input type="password" name="password" placeholder="password" className="text-slate-950 w-full h-full  border-transparent border-4 rounded-2xl focus:border-b-slate-950 p-5 focus:outline-none "/>
        </label>
        <label  className="text-black">
            confirm password
            <input type="password" name="confirmPassword" placeholder="confirm password" className="text-slate-950 w-full h-full  border-transparent border-4 rounded-2xl focus:border-b-slate-950 p-5 focus:outline-none "/>
        </label>
        <button type="submit" disabled={isLoading} className="bg-slate-900 text-white rounded-3xl p-4">{isLoading ? 'Loading...' : 'Submit'}</button>
      </form>
    );
}