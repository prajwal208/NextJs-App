import styles from '../../styles/contact.module.css'
import Image from 'next/image'

export const metadata = {
    title: 'Contact',
    description: 'This is the Contatc page',
  }

export default function Contact() {
    return (
        <>
         <div className={styles.container}>
             <h1 className={styles.h1}>Let's Keep in Touch</h1>
            <div className={styles.content}>
                <section className={styles.imageSection}>
                    <Image src='/contact1.svg' alt="contatc-img" width={600} height={400}/>
                </section>

                <section className={styles.section}>
                    <form className={styles.form}>
                        <input type="text" placeholder="Name" className={styles.input}/> 
                        <input type="email" placeholder="Email" className={styles.input}/>
                        <textarea rows="10" cols="20" 
                        placeholder="message" className={styles.textarea}/>
                        <button className={styles.button}>Submit</button>
                    </form>    
                </section>    
            </div>     
        </div>   
        </>
    )
}
