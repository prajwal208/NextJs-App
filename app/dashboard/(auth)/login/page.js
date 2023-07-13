'use client'

import { useRouter } from 'next/navigation'
import styles from '../../../../styles/register.module.css'
import { signIn, useSession } from "next-auth/react"

export default function Login() {

const session = useSession()
const router = useRouter()

if(session.status === "loading"){
    return <p>loading...</p>
}

if(session.status === "authenticated"){
    router.push("/dashboard")
}

const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials",{email,password})
}


    return (
        <>
           
            <h1 className={styles.h1}>Login</h1>
            <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="email" placeholder="Email"  className={styles.input} required/>
                <input type="password" placeholder="password"  className={styles.input} required/>
                <button className={styles.button}>Login</button>
            </form>
            </div>
            <button className={styles.googlebtn} onClick={() => signIn("google")}>SignIn with google</button>
        </>
    )
}
