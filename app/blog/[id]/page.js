import styles from '../../../styles/post.module.css'
import Image from 'next/image'
import {notFound} from 'next/navigation'

const getData = async(id) => {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`)

    if(!res.ok){
        return notFound()
    }
    return res.json()
}

//dynamic metadata
export async function generateMetadata({params}){
    const post = await getData(params.id)

    return{
        title:post.title,
        description:post.desc
    }
}


export default async function BlogPost({params}) {

const data = await getData(params.id)

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.uppersection}>
                        <div className={styles.infoSection}>
                            <h1 className={styles.h1}>{data.title}</h1>
                            <p className={styles.p}>{data.content}</p>
                            <p className={styles.p}>Author</p>
                        </div>
                        <div className={styles.imageSection}>
                            <Image src={data.img}
                            width={600}
                            height={300}/>
                        </div>
                    </section>

                    <section className={styles.lowerSection}>
                        <p className={styles.para1}>{data.desc}</p>
                        <p className={styles.para1}>{data.desc}</p>
                        <p className={styles.para1}>{data.desc}</p>
                    </section>
                </div>
            </div>
        </>
    )
}
