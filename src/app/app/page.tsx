export default function App() {
    return (
        <main className="h-screen">
            <header className="w-screen flex justify-center p-5">
                <h1 className="text-black text-3xl flex justify-center">Header</h1>
            </header>
            <main className="h-full flex flex-row ">
                <nav className="basis-16 ">
                    <ul className=" flex  flex-col justify-items-center justify-center">
                        <li className="text-black m-2 text-4xl">🏡</li>
                        <li className="text-black m-2 text-4xl">📓</li>
                        <li className="text-black m-2 text-4xl">📆</li>
                        <li className="text-black m-2 text-4xl">🎒</li>
                    </ul>
                </nav>
                <div className="main     basis-[60pc] m-8">
                    <p className="text-black text-3xl flex justify-center">Main</p>
                </div>
            </main>



        </main>
    )
}