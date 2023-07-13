import Image from 'next/image'
import styles from '../../../styles/category.module.css'

export default function Category({params}) {

    return (
        <>
            
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.h1}>{params.category}</h1>
                
                <section className={styles.section}>
                    <subsection>
                        <h2>Creative Portfolio</h2>
                        <p className={styles.p}>loremDo veniam officia pariatur ad. Aliqua et esse sunt excepteur laboris ullamco occaecat. Consectetur exercitation excepteur velit deserunt qui officia cillum tempor labore fugiat sit. Eu do sunt veniam ullamco. Sint reprehenderit proident Lorem nulla dolor adipisicing fugiat nostrud minim proident sit. Magna commodo ipsum commodo quis nisi labore exercitation pariatur officia anim in id quis elit.</p>
                    </subsection>
                    <subsection className={styles.imgSec}>
                        <Image src="https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" width={500} height={300}/>
                    </subsection>
                </section>

                <section className={styles.section}>
                    <subsection>
                        <h2>Creative Portfolio</h2>
                        <p className={styles.p}>loremDo veniam officia pariatur ad. Aliqua et esse sunt excepteur laboris ullamco occaecat. Consectetur exercitation excepteur velit deserunt qui officia cillum tempor labore fugiat sit. Eu do sunt veniam ullamco. Sint reprehenderit proident Lorem nulla dolor adipisicing fugiat nostrud minim proident sit. Magna commodo ipsum commodo quis nisi labore exercitation pariatur officia anim in id quis elit.</p>
                    </subsection>
                    <subsection className={styles.imgSec}>
                        <Image src="https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" width={500} height={300}/>
                    </subsection>
                </section>

                <section className={styles.section}>
                    <subsection>
                        <h2>Creative Portfolio</h2>
                        <p className={styles.p}>loremDo veniam officia pariatur ad. Aliqua et esse sunt excepteur laboris ullamco occaecat. Consectetur exercitation excepteur velit deserunt qui officia cillum tempor labore fugiat sit. Eu do sunt veniam ullamco. Sint reprehenderit proident Lorem nulla dolor adipisicing fugiat nostrud minim proident sit. Magna commodo ipsum commodo quis nisi labore exercitation pariatur officia anim in id quis elit.</p>
                    </subsection>
                    <subsection className={styles.imgSec}>
                        <Image src="https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" width={500} height={300}/>
                    </subsection>
                </section>
            </div>    
        </div> 
    
        </>
    )
}
