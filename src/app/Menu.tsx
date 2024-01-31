'use client'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import GroupsIcon from '@mui/icons-material/Groups'
import MenuIcon from '@mui/icons-material/Menu'

export default function Menu() {
    return (
        <>
            <div className="min-w-16"></div>
            <nav className="absolute flex h-full w-16 min-w-16 flex-col items-center gap-2 bg-blue-700 p-2">
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
                className="absolute left-16 flex h-full min-w-16 flex-col items-center gap-2 bg-red-700">
            </div>
            <style jsx>
                {`
                nav:has(label > input:checked) + #extended{
                    min-width: 5rem;
                }
            `}
            </style>
        </>
    )
}