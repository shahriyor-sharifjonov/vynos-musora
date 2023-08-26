import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.body}>
                <p className={styles.p}>2023 Все права защищены <a href="https://elapp.ru/" target="_blank" rel="noreferrer">elApp</a></p>
            </div>
        </footer>
    )
}

export default Footer
