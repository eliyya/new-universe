import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}
export function Button(props: ButtonProps) {
    return (<button {...props} className={`rounded-3xl bg-slate-900 p-4 text-white ${props.className}`}>
        {props.children}
    </button>)
}