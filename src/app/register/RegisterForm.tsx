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
      <form onSubmit={onSubmit} className="flex flex-col justify-center items-center">
        <label>
          email
          <input type="email" name="email" />
        </label>
        <label>
          password
          <input type="password" name="password" />
        </label>
        <label>
            confirm password
            <input type="password" name="confirmPassword" />
        </label>
        <button type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : 'Submit'}</button>
      </form>
    );
}