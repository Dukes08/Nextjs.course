import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import ActiveLink from '../active-link/ActiveLink'

const navItems = [{ 'label': 'About', 'href': '/about' }, { 'label': 'Pricing', 'href': '/pricing' }, { 'label': 'Contact', 'href': '/contact' }]

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
            <Link href={'/'} className='flex items-center gap-4'>
                <HomeIcon />
                <span>
                    Home
                </span>
            </Link>

            <div>
                {
                    navItems.map((navItem) =>
                        <ActiveLink key={navItem.href} text={navItem.label} path={navItem.href}/>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar