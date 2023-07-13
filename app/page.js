import styles from "../styles/home.module.css";
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section>
          <h1 className={styles.h1}>Better Design for Digital Products</h1>
          <p className={styles.para}>
            A blog, short for weblog, is a frequently updated web page used for
            personal commentary or business content. Blogs are often interactive
            and include sections at the bottom of individual blog posts where
            readers can leave comments.
          </p>
          <button className={styles.button}>See Our Works</button>
          </section>
          <div className={styles.imageSection}>
            <Image src='/img.svg' alt="home image" fill={true} className={styles.image}/>
          </div>
        
      </div>
    </div>
  );
}
