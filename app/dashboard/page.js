'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";



export default function Dashboard() {

const session = useSession()
const router = useRouter()

if(session.status === "loading"){
    return <p>loading...</p>
}

if(session.status === "unauthenticated"){
    router.push("/dashboard/login")
}
console.log(session);

if(session.status === "authenticated"){
return (
        <>
           <h1>Dashboard</h1>
        </>
    )
}
}
