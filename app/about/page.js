import styles from '../../styles/about.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div>
            <div className={styles.abtContainer}>
                <div className={styles.abtContent}>
                    <div className={styles.imgContent}>
                        <Image src="/about.jpg" alt="abt-image" width={1450} height={300}
                            styles={styles.abtImage} />

                        <div className={styles.textContent}>
                            <h3>Digital Stroytellers</h3>
                            <h4>Handcrafting digital winning awards</h4>
                        </div>
                    </div>

                    <section className={styles.section}>
                        <sidebar>
                            <h1 className={styles.h1}>Who are We</h1>
                            <p className={styles.p}>loremEst irure in minim est tempor laboris labore nisi aute consectetur.
                            Nostrud incididunt tempor laboris est veniam excepteur tempor sint. Est adipisicing nulla quis laboris. Sit mollit nostrud Lorem minim sint ad quis sint consectetur aliquip dolor. Quis aute qui veniam commodo. Dolore enim in non ex deserunt fugiat. Esse cupidatat non mollit non do ex.
                            </p>

                            <p  className={styles.p}>loremEst irure in minim est tempor laboris labore nisi aute consectetur.
                            Nostrud incididunt tempor laboris est veniam excepteur tempor sint. Est adipisicing nulla quis laboris. Sit mollit nostrud Lorem minim sint ad quis sint consectetur aliquip dolor. Quis aute qui veniam commodo. Dolore enim in non ex deserunt fugiat. Esse cupidatat non mollit non do ex.
                            </p>
                        </sidebar>

                        <sidebar className={styles.sidebar}>
                            <h1 className={styles.h1}>Who We  Do</h1>
                            <p  className={styles.p}>loremEst irure in minim est tempor laboris labore nisi aute consectetur.
                            Nostrud incididunt tempor laboris est veniam excepteur tempor sint. Est adipisicing nulla quis laboris. Sit mollit nostrud Lorem minim sint ad quis sint consectetur aliquip dolor. Quis aute qui veniam commodo. Dolore enim in non ex deserunt fugiat. Esse cupidatat non mollit non do ex.
                            </p>

                            <p className={styles.p}>-dynamic Website</p>
                            <p  className={styles.p}>-Fast and handy</p>
                            <p  className={styles.p}>-Mobile apps</p>

                            <button className={styles.button}>Contact</button>
                        </sidebar>
                    </section>
                </div>
            </div>
        </div>
    )
}
