import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.body}>
                <a href="#!" className={styles.logo}>
                    <img src="/logo.svg" alt="" draggable={false}/>
                    <p>Вынос <span>мусора</span></p>
                </a>
                <div className={styles.info}>
                    <p className={styles.infoTitle}>Время работы</p>
                    <p className={styles.infoValue}>с 9 утра до 21.00</p>
                </div>
            </div>
        </header>
    )
}

export default Header