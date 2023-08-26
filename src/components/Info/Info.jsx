import React from 'react'
import styles from './Info.module.scss'

const Info = () => {
    return (
        <section className={styles.info}>
            <div className={styles.body}>
                <div className={`${styles.item} ${styles.intro}`}>
                    <p className={styles.title}><span>Сервис помогает</span><br />множеству людей</p>
                </div>
                <div className={`${styles.item} ${styles.el}`}>
                    <p className={styles.elTitle}>Занятым людям</p>
                    <p className={styles.elP}>Кто не хочет тратить<br/>на вынос мусора<br/>свое время</p>
                    <div className={styles.elImage}>
                        <img src="/adv-1.svg" alt="" draggable={false} />
                    </div>
                </div>
                <div className={`${styles.item} ${styles.el}`}>
                    <p className={styles.elTitle}>Тем, кто болеет</p>
                    <p className={styles.elP}>или плохо себя чувствует,<br/>и не выходит на улицу</p>
                    <div className={styles.elImage}>
                        <img src="/adv-2.svg" alt="" draggable={false} />
                    </div>
                </div>
                <div className={`${styles.item} ${styles.el}`}>
                    <p className={styles.elTitle}>Тем, кому сложно<br />выйти на улицу</p>
                    <p className={styles.elP}>Например, людям<br />на инвалидной коляске</p>
                    <div className={styles.elImage}>
                        <img src="/adv-3.svg" alt="" draggable={false} />
                    </div>
                </div>
                <div className={`${styles.item} ${styles.el}`}>
                    <p className={styles.elTitle}>Беременным</p>
                    <div className={styles.elImage}>
                        <img src="/adv-4.svg" alt="" draggable={false} />
                    </div>
                </div>
                <div className={`${styles.item} ${styles.el}`}>
                    <p className={styles.elTitle}>Пожилым людям</p>
                    <div className={styles.elImage}>
                        <img src="/adv-5.svg" alt="" draggable={false} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info
