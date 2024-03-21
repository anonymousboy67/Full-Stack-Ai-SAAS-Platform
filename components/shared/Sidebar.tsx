'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton  } from '@clerk/nextjs';
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button';


const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className='sidebar'>
            <div className='flex size-full flex-col gap-4'>
                <Link href='/' className="sidebar-logo">
                    <div>
                        <Image src="/assets/images/main-logo-icon.png" alt="logo" width={140} height={28}/>
                    </div>
                </Link>

                <nav className='sidebar-nav'>
                    <SignedIn>
                        <ul className='sidebar-nav_elements'>
                            {navLinks.slice(0,6).map((link) => {
                                const isActive = link.route === pathname;

                                return (
                                    <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                                        <Link href={link.route}>
                                            <div className='sidebar-link'>
                                                <Image
                                                    src={link.icon}
                                                    alt="logo"
                                                    width={24}
                                                    height={24}
                                                    className={`${isActive && 'brightness-200'}`}/>
                                                {link.label}
                                            </div>
                                        </Link>
                                    </li>
                                );
                            })}

                            </ul>

                            <ul className='sidebar-nav_elements'>

                            {navLinks.slice(6).map((link) => {
                                const isActive = link.route === pathname;

                                return (
                                    <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                                        <Link href={link.route}>
                                            <div className='sidebar-link'>
                                                <Image
                                                    src={link.icon}
                                                    alt="logo"
                                                    width={24}
                                                    height={24}
                                                    className={`${isActive && 'brightness-200'}`}/>
                                                {link.label}
                                            </div>
                                        </Link>
                                    </li>
                                );
                            })}
                            <li className='flex-center cursor-pointer gap-2 p-4'>
                                <UserButton afterSignOutUrl='/' showName/>
                            </li>
                        </ul>

                    </SignedIn>

                    <Button asChild className="button bg-purple-gradient bg-cover">
                        <Link href='/sign-in'>Login</Link>
                    </Button>

                    <SignedOut>
                        {/* Content to display when signed out */}
                    </SignedOut>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;
