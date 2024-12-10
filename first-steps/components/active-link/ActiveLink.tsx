'use client'
import Link from 'next/link'
import React from 'react'
import style from './Activelink.module.css'
import { usePathname } from 'next/navigation'

interface Props {
    path: string,
    text: string,
}

const ActiveLink = ({ path, text }: Props) => {
    const activePath = usePathname()
    return (

        <Link 
        className={`${style.link} ${activePath == path? style['active-link']: ''}`}
        href={path}
        >{text}
        </Link>
    )
}

export default ActiveLink