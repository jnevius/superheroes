import React from "react"
import { Space_Grotesk } from "next/font/google"
import { Sedgwick_Ave } from "next/font/google"
import { cn } from "@/lib/utils"

const grotesk = Space_Grotesk({ subsets: ['latin']})
const sedgwick = Sedgwick_Ave({
  subsets: ['latin'],
  weight: "400"
})

interface Props {
    children: React.ReactNode
    className?: string
}
const H1: React.FC<Props> = ({children, className}) => {
    return <h1 className={cn(`${grotesk.className} text-5xl font-semibold text-slate-800`, className)}>{children}</h1>
}

const H2: React.FC<Props> = ({children, className}) => {
    return <h2 className={cn(`${grotesk.className} text-2xl text-slate-800`, className)}>{children}</h2>
}
const H3: React.FC<Props> = ({children, className}) => {
  return <h2 className={cn(`${sedgwick.className} text-2xl text-slate-800`, className)}>{children}</h2>
}

export {H1, H2, H3};