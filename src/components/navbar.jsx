'use client';
import Link from "next/link";
import {useState} from "react";
import Image from "next/image";
import NavLink from "@/components/nav-link";
import { motion } from 'framer-motion';

const links = [
    { url: '/', label: 'Home' },
    { url: '/about', label: 'About' },
    { url: '/portfolio', label: 'Portfolio' },
    { url: '/contact', label: 'Contact' },
]

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const topVariants = {
        closed: { rotate: 0 },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255, 255, 255)",
        }
    }
    
    const centerVariants = {
        closed: { opacity: 1 },
        opened: {
            opacity: 0,
        }
    }
    
    const bottomVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255, 255, 255)",
        }
    }
    
    const listVariants = {
        closed: {
            x: '100vw'
        },
        opened: {
            x: 0,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.2,
            }
        }
    }
    
    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        }
    }
    
    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            {/*Links*/}
            <div className='hidden md:flex gap-4 w-1/3'>
                {
                    links.map((link, index) => {
                        return (
                            <NavLink href={link.url} key={index}
                                  className='' link={link}>{link.label}</NavLink>
                        )
                    })
                }
            </div>
            
            {/*Logo*/}
            <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
                <Link href='/' className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
                    <span className='text-white mr-1'>Alex</span>
                    <span className='rounded h-8 w-12 bg-white text-black flex items-center justify-center'>.dev</span>
                </Link>
            </div>
            
            {/*Social*/}
            <div className='hidden md:flex gap-3 w-1/3 justify-end'>
                <Link href='/'>
                    <Image src='/github.png' alt='github' width={24} height={24} />
                </Link>
                <Link href='/'>
                    <Image src='/instagram.png' alt='github' width={24} height={24} />
                </Link>
                <Link href='/'>
                    <Image src='/facebook.png' alt='github' width={24} height={24} />
                </Link>
                <Link href='/'>
                    <Image src='/pinterest.png' alt='github' width={24} height={24} />
                </Link>
                <Link href='/'>
                    <Image src='/linkedin.png' alt='github' width={24} height={24} />
                </Link>
            </div>
            
            {/*Burger*/}
            <div className='md:hidden'>
                <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() => setOpen(prev => !prev)}>
                    <motion.div
                        variants={topVariants}
                        className={`w-10 h-1 bg-black rounded origin-left`}
                        animate={open ? 'opened' : 'closed'}
                    ></motion.div>
                    <motion.div
                        variants={centerVariants}
                        className={`w-10 h-1 bg-black rounded`}
                        animate={open ? 'opened' : 'closed'}
                    >
                    </motion.div>
                    <motion.div
                        variants={bottomVariants}
                        className='w-10 h-1 bg-black rounded origin-left'
                        animate={open ? 'opened' : 'closed'}
                    ></motion.div>
                </button>
                {
                    open && (
                        <motion.div variants={listVariants} initial='closed' animate='opened' className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-9 text-4xl z-40'>
                            {
                                links.map((link, index) => {
                                    return (
                                        <motion.div key={index} variants={listItemVariants}>
                                            <Link href={link.url} className=''>{link.label}</Link>
                                        </motion.div>
                                        
                                    )
                                })
                            }
                        </motion.div>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;