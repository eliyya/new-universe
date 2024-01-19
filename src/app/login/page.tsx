import LoginForm from "./LoginForm";

export default function LoginPage() {
    return (
      <main className="flex flex-col justify-center items-center h-screen ">
        <h1 className="text-slate-950 font-bold text-4xl h-16">login</h1>
        <LoginForm />
      </main>
    );
}