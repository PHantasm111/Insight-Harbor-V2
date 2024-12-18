"use client"
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { AlignJustify, X } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ModeToggle } from './themeToggle'

const Navbar = () => {
    const router = useRouter();
    const [user, setUser] = useState(false);
    const MenuList = ["Build A DataLake", "Tools Libary"];

    // Menu open state
    const [open, setOpen] = useState(false)


    return (
        <div className='relative bg-white dark:bg-black-600 border-b-1 border-gray-200 h-20 lg:h-24 w-full flex flex-row items-center justify-between'>
            {/* Logo & Title */}
            <div className='font-sans font-bold text-xl md:text-2xl lg:text-4xl p-2'>
                <div className='flex gap-4 items-center cursor-pointer dark:text-white' onClick={() => router.push("/")}>
                    <Image src="/assets/logo.svg" alt='logo' width={40} height={40} />
                    Insight Harbor&#8482;
                </div>
            </div>
            {/* Navigation Links */}
            {/* PC Menu */}
            <div className='hidden md:flex items-center gap-8 p-4'>
                <div className='font-sans font-semibold text-2xl p-2 rounded-md
                text-black-600 dark:text-white cursor-pointer hover:underline dark:hover:bg-black-500'>
                    Build A DataLake
                </div>
                <div className='font-sans font-semibold text-2xl p-2 rounded-md
                text-black-600 dark:text-white cursor-pointer hover:underline dark:hover:bg-black-500'>
                    Tools Libary
                </div>
                {user ? (
                    <div className='flex gap-2 items-center self-end pl-8'>
                        <p className='font-sans text-xl text-black'>Hi, CN</p>
                        <div className='flex items-center'>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                ) : (
                    <>
                        <ModeToggle />
                        <div>Sign In</div>
                        <div>Sign Up</div>
                    </>

                )}

            </div>

            {/* Mobile Menu Icon*/}
            <div className='flex md:hidden items-center gap-2'>
                <ModeToggle />
                <div className='flex m-1 p-4 cursor-pointer hover:bg-gray-200 hover:rounded-lg' onClick={() => setOpen(!open)}>
                    {!open && <AlignJustify />}
                    {open && <X />}
                </div>
            </div>


            {/* Toggle Menu */}
            {open && (
                <div className='absolute top-20 w-full h-[calc(100vh-5rem)] bg-gray-100 z-10'>
                    <div className='flex flex-col items-center justify-center gap-4 p-4'>
                        {MenuList.map((menu, index) => (
                            <div key={index} className='font-sans font-semibold text-2xl text-center text-neutral-500 cursor-pointer hover:bg-gray-200 w-full p-4'>
                                {menu}
                            </div>
                        ))}
                        {user ? (
                            <div className='flex gap-2 items-center pl-8'>
                                <p className='font-sans text-xl text-black'>Hi, CN</p>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                        ) : (
                            <div>Sign In</div>
                        )}

                    </div>
                </div>
            )}


        </div>
    )
}

export default Navbar