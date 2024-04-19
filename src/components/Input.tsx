import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}
export function Input(props: InputProps) {
    return (<input
        {...props}
        className={`h-full w-full rounded-2xl  border-4 border-transparent px-5 py-3 text-slate-950 focus:border-b-slate-950 focus:outline-none ${props.className}`}
    />)
}