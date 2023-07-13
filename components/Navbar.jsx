"use client";

import React from 'react'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import { signOut, useSession  } from 'next-auth/react'

const links = [
    {
        id:1,
        title:"Home",
        url:"/"
    },
    {
        id:2,
        title:"Portfolio",
        url:"/portfolio"
    },
    {
        id:3,
        title:"Blog",
        url:"/blog"
    },
    {
        id:4,
        title:"About",
        url:"/about"
    },
    {
        id:5,
        title:"Contact",
        url:"/contact"
    },
    {
        id:6,
        title:"Dashboard",
        url:"/dashboard"
    },
]


export default function Navbar() {

    const session = useSession()
    return (
        <>
        <nav className={styles.nav}>
         <header className={styles.header}>Blog</header>
         <ul className={styles.ul}>
         {

             links.map((link) => {
            return <Link href={link.url} key={link.id} className={styles.a}>{link.title}</Link>
                 
             })
         }
         {session.status === "authenticated" && ( 
         <button className={styles.logoutbtn} onClick={signOut}>Logout</button>
        )}
         </ul>
         </nav>
        </>
    )
}
