export default function Menu() {
    return (
        <>
            <div className="bg-blue-700 min-w-16"></div>
            <nav className="min-w-56 absolute flex flex-col">
                <a href="/app/calendar">calendario</a>
                <a href="#">tareas</a>
                <a href="#">clases</a>
                <a href="#">pendientes</a>
                <a href="#">configuración</a>
            </nav>
        </>
    )
}