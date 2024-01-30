import Image from 'next/image'
import { Roboto } from 'next/font/google'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomeIcon from '@mui/icons-material/Home';

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin']
})

export default function App() {
    return (
        <div className="h-screen flex flex-col">
            <header className="p-1 border-b-2 border-slate-950 border-slroboto.classNamete-950 flex  flex-row">
                <div className=" flex justify-center items-center">
                    <MenuIcon />
                    <h1 className="flex justify-center items-center  h-full w-full">
                        <Image src="https://cdn.discordapp.com/attachments/991195266235514951/1201739307338182696/tohru.png?ex=65cae9f2&is=65b874f2&hm=cec0f089fde3ba17a9415216148b376961ed76a0428a4640e2a088f73dd7e6c3&" width={40} height={40} alt='logo' />
                        <span className={`${roboto.className}`}>Classroom</span>
                        <ArrowForwardIosIcon />
                        <span>tareas</span>
                    </h1>

                </div>
            </header>

            <div className='flex flex-row  justify-center flex-1'>
                <nav className="flex border-e-2 border-slate-950 basis-[270px] ">
                    <ul className="flex flex-col">
                        <li className="barrasmenu"> <HomeIcon /> Página principal</li>
                        <li className="barrasmenu">Calendario</li>
                        <li className="barrasmenu">Clases</li>
                        <li className="barrasmenu">Pendientes</li>
                        <li className="barrasmenu">tareas</li>
                        <li className='barrasmenu'>Configuración</li>
                    </ul>
                </nav>
                <main className='flex-1 '>
                    <h2>Clases en las que te inscribiste</h2>
                </main>
            </div>
        </div>
    )
}