'use client'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import GroupsIcon from '@mui/icons-material/Groups'
import MenuIcon from '@mui/icons-material/Menu'

export default function Menu() {
    return (
        <>
            <div className="min-w-16"></div>
            <nav className="absolute z-20 flex h-full w-16 min-w-16 flex-col items-center gap-2  bg-slate-400 p-2">
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label className='aspect-square'>
                    <MenuIcon sx={{
                        height: '100%',
                        width: '100%',
                    }}/>
                    <input type="checkbox"
                        className='hidden' />
                </label>
                <a
                    className='aspect-square'
                    href="/app/calendar">
                    <CalendarMonthIcon sx={{
                        height: '100%',
                        width: '100%',
                    }}/>
                </a>
                <a
                    className='aspect-square'
                    href="/app/calendar">
                    <TaskAltIcon sx={{
                        height: '100%',
                        width: '100%',
                    }} />
                </a>
                <a
                    className='aspect-square'
                    href="/app/calendar">
                    <GroupsIcon sx={{
                        height: '100%',
                        width: '100%',
                    }} />
                </a>
            </nav>
            <div id='extended'
                className="absolute -left-5 z-10 flex h-full min-w-16 flex-col items-center gap-2 bg-slate-400 p-2 pr-4 transition-all duration-500 ease-in-out">
                <span className='flex h-12 flex-col justify-center'></span>
                <a href='/app/calendar'
                    className='flex h-12 flex-col justify-center'>
                    calendar
                </a>
                <a href='/app/todo'
                    className='flex h-12 flex-col justify-center'>
                    todo
                </a>
                <a href='/app/groups'
                    className='flex h-12 flex-col justify-center'>
                    groups
                </a>
            </div>
            <style jsx>
                {`
                nav:has(label > input:checked) + #extended{
                    left: 4rem;
                }
            `}
            </style>
        </>
    )
}