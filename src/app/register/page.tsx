import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
    return (
      <main className="h-screen flex flex-col justify-center items-center bg-slate-300">
        <h1 className="text-5xl text-zinc-950">register</h1>
        <RegisterForm />
      </main>
    );
}