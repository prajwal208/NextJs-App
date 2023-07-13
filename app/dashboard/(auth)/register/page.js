'use client'

import React,{useState} from 'react'
import { useRouter } from 'next/navigation'
import styles from '../../../../styles/register.module.css'

export default function Register() {

const [error,setError] = useState(null)
const router = useRouter()


const handleSubmit = async (e) => {
    e.preventDefault()
    const username = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
   
    try {
        const res = await fetch("/api/auth/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({username,email,password})
        })


        res.status === 201 && router.push("/dashboard/login?success=Account has been created")
        alert("Registration Successful")
    } catch (error) {
       setError(error)
       alert('Error occured')
    }
}

    return (
        <>
            
            <h1 className={styles.h1}>Register</h1>
            <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="username" className={styles.input} required/>
                <input type="email" placeholder="Email"  className={styles.input} required/>
                <input type="password" placeholder="password"  className={styles.input} required/>
                <button className={styles.button}>Register</button>
                
            </form>
            </div>
           
        </>
    )
}
