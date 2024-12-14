'use client'

import { usePathname } from 'next/navigation';
import React, { JSX } from 'react'

interface props{
    path: string;
    icon: JSX.Element;
    title: string;
    subtitle: string
}



const SidebarMenuItem = ({path, icon, title, subtitle}:props) => {

    const usePath = usePathname()
    console.log(path.split('/')[2])
    return (
        <>
            <a href={path} className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${usePath.includes(path.split('/')[2]) ? 'bg-blue-800' : ''}  hover:bg-white/5 transition ease-linear duration-150`}>
                <div>
                    {icon}

                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-bold leading-5 text-white">{title}</span>
                    <span className="text-sm text-white/50 hidden md:block">{subtitle}</span>
                </div>
            </a>
        </>
    )
}

export default SidebarMenuItem