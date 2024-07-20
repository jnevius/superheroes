import React from "react"
import { Space_Grotesk } from "next/font/google"

const grotesk = Space_Grotesk({ subsets: ['latin']})

interface Props {
    children: React.ReactNode
    className?: string
}
const H1: React.FC<Props> = ({children, className}) => {
    return <h1 className={`${grotesk.className} ${className} text-5xl font-semibold text-slate-800`}>{children}</h1>
}

const H2: React.FC<Props> = ({children}) => {
    return <h2 className={`${grotesk.className} text-2xl text-slate-800`}>{children}</h2>
}

export {H1, H2};