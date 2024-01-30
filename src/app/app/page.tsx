export default function App() {
    return (
        <main className="h-screen">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            <header className=" m-3 p-1 border-b-2 border-slate-950 flex ">
                <div className=" flex justify-center items-center">
                    <span className="material-symbols-outlined">
                        <span>menu</span>
                    </span>
                    <h1 className="flex">
                        <img src="https://www.gstatic.com/classroom/logo_square_rounded.svg" alt="" className="size-11"/>
                        <span>Classroom</span><i>d</i>

                    </h1>
                </div>
            </header>
        </main>
    )
}