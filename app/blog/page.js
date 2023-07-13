import React from "react";
import styles from "../../styles/blog.module.css";
import Image from "next/image";
import Link from 'next/link'


const getData = async() => {
    const res = await fetch('http://localhost:3000/api/posts')

    if(!res.ok){
        throw new Error('failed to fetch')
    }

    return res.json()

}



export default async function Blog() {
    const data = await getData()
    return (
        <div>
            <div className={styles.continer}>
            <div className={styles.content}>
                {
                    data.map((item) => {
                        return <Link href={`blog/${item._id}`}>
                        <div className={styles.blogSection} key={item.id}>
                            <div className={styles.image}>
                                <Image
                                    src={item.img}
                                    width={350}
                                    height={230}
                                />
                            </div>
                            <div className={styles.desc}>
                                <h1>{item.title}</h1>
                                <p className={styles.p}>
                                    {item.content}
                                </p>
                            </div>
                        </div>
                        </Link>
                    })
                }
                </div>
            </div>
        </div>
    );
}
