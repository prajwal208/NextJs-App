import styles from '../../styles/portfolio.module.css'

export const metadata = {
    title: 'Portfolio',
    description: 'Generated by create next app',
}

export default function layout({children}) {
    return (
        <>
        <html lang="en">
        <body>
        <h1 className={styles.h1}>Our Works</h1>
        {children}
        </body>
    </html> 
        </>
    )
}
