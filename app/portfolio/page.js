import styles from '../../styles/portfolio.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio() {
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.h2}>Choose a gallery</h2>
                <div className={styles.content}>
                    <div className={styles.card}>
                        <div className={styles.imgsec}>
                            <Image src='/illus.avif' width={300} height={400} />
                            <Link href="/portfolio/Illustration">
                            <h3 className={styles.h3}>Illustrations</h3>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imgsec}>
                            <Image src='/website.jpg' width={300} height={400} className={styles.img}/>
                            <Link href="/portfolio/Website">
                            <h3 className={styles.h3}>Website</h3>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imgsec}>
                            <Image src='/phone.jpg' width={300} height={400} />
                            <Link href="/portfolio/Application">
                            <h3 className={styles.h3}>Application</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
