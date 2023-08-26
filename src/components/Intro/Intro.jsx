import React, { useState } from 'react'
import styles from './Intro.module.scss'

const Intro = () => {
    const [videoOpened, setVideoOpened] = useState(false)
    return (
        <section className={styles.intro}>
            {videoOpened && (
                <div className={styles.video}>
                    <button className={styles.videoOverlay} onClick={() => setVideoOpened(false)}></button>
                    <div className={styles.videoContent}>
                        <div className={styles.videoInner}>
                            <div className={styles.videoWrap}>
                                <video src="/video.mp4" id="video" controls></video>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className={styles.body}>
                <div className={styles.left}>
                    <h1 className={styles.title}>Выносим мусор <span>за вас</span></h1>
                    <div className={`${styles.info} ${styles.sm}`}>
                        <p><span>Посмотрите короткий ролик</span><br/>и узнайте насколько это просто</p>
                        <svg width="62" height="48" viewBox="0 0 62 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.5213 35.6036C52.0032 29.0192 58.189 15.7069 57.3608 3.12031C57.44 3.02572 57.5192 2.93112 57.5985 2.83653C58.1919 7.09928 58.7968 11.444 59.4809 15.6941C59.6064 16.5959 61.238 16.3687 61.1125 15.467C60.4278 10.5484 59.6524 5.64249 58.9676 0.723926C58.8877 0.150094 57.9242 -0.13359 57.5394 0.421364C57.3017 0.705151 57.1547 0.976318 56.917 1.26011C56.5087 0.98268 55.8742 1.07102 55.7614 1.58811C55.2638 2.66016 54.7662 3.73221 54.178 4.81688C52.7746 6.68355 51.3712 8.55023 49.9678 10.4169C49.3454 11.2556 50.5587 12.0059 51.2946 11.3185C53.0834 9.56533 54.4754 7.61668 55.584 5.62392C55.6518 5.44735 55.7311 5.35275 55.8103 5.25815C55.9235 16.6908 50.0647 28.3699 38.8062 34.4497C27.2873 40.6494 12.248 39.4841 2.78879 31.2746C2.48261 31.0666 2.07503 31.4576 2.29056 31.6783C11.739 40.4742 27.6397 41.8538 39.5213 35.6036Z" fill="#E2E2E2"/>
                        </svg>
                    </div>
                    <button className={`${styles.poster} ${styles.sm}`} onClick={() => {
                        setVideoOpened(true)
                        setTimeout(() => {
                            document.querySelector('#video').play();
                        }, 300)
                    }}>
                        <img src="/poster.png" alt="" draggable={false}/>
                        <div className={styles.posterBtn}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5378 13.4113C24.5846 14.2118 24.5846 15.7882 23.5378 16.5887L9.2149 27.5415C7.89888 28.5479 6 27.6095 6 25.9528L6 4.04717C6 2.39046 7.89888 1.45208 9.2149 2.45845L23.5378 13.4113Z" fill="white"/>
                            </svg>
                        </div>
                    </button>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <div className={styles.itemIcon}>
                                <img src="/coin.svg" alt="" draggable={false} />
                            </div>
                            <p className={styles.itemTitle}>Стоимость<br/><span>от 25 руб</span></p>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.itemIcon}>
                                <img src="/phone.svg" alt="" draggable={false} />
                            </div>
                            <p className={styles.itemTitle}>Быстрый заказ<br/><span>в 1 клик</span></p>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.itemIcon}>
                                <img src="/garbage.svg" alt="" draggable={false} />
                            </div>
                            <p className={styles.itemTitle}>Скорость исполнения<br/>заказа <span>- 10 минут</span></p>
                        </div>
                    </div>
                    <p className={styles.p}>Скачайте приложение и создайте заказ.<br></br>Установка займет всего 2 минуты.</p>
                    <div className={styles.row}>
                        <a href="https://play.google.com/store/apps/dev?id=5475543677782911277&hl=ru&gl=US&pli=1" target="_blank" rel="noreferrer" className={styles.app}>
                            <img src="/google.svg" alt="" draggable={false} />
                        </a>
                        <a href="https://apps.apple.com/ru/app/2%D0%B3%D0%B8%D1%81-%D0%BA%D0%B0%D1%80%D1%82%D1%8B-%D0%BD%D0%B0%D0%B2%D0%B8%D0%B3%D0%B0%D1%82%D0%BE%D1%80-%D0%BC%D0%B5%D1%81%D1%82%D0%B0/id481627348" target="_blank" rel="noreferrer" className={styles.app}>
                            <img src="/appstore.svg" alt="" draggable={false} />
                        </a>
                    </div>
                </div>
                <div className={styles.right}>
                    <button className={`${styles.poster} ${styles.lg}`} onClick={() => {
                        setVideoOpened(true)
                        setTimeout(() => {
                            document.querySelector('#video').play();
                        }, 300)
                    }}>
                        <img src="/poster.png" alt="" draggable={false}/>
                        <div className={styles.posterBtn}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5378 13.4113C24.5846 14.2118 24.5846 15.7882 23.5378 16.5887L9.2149 27.5415C7.89888 28.5479 6 27.6095 6 25.9528L6 4.04717C6 2.39046 7.89888 1.45208 9.2149 2.45845L23.5378 13.4113Z" fill="white"/>
                            </svg>
                        </div>
                    </button>
                    <div className={`${styles.info} ${styles.lg}`}>
                        <p><span>Посмотрите короткий ролик</span><br/>и узнайте насколько это просто</p>
                        <svg width="62" height="48" viewBox="0 0 62 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.5213 35.6036C52.0032 29.0192 58.189 15.7069 57.3608 3.12031C57.44 3.02572 57.5192 2.93112 57.5985 2.83653C58.1919 7.09928 58.7968 11.444 59.4809 15.6941C59.6064 16.5959 61.238 16.3687 61.1125 15.467C60.4278 10.5484 59.6524 5.64249 58.9676 0.723926C58.8877 0.150094 57.9242 -0.13359 57.5394 0.421364C57.3017 0.705151 57.1547 0.976318 56.917 1.26011C56.5087 0.98268 55.8742 1.07102 55.7614 1.58811C55.2638 2.66016 54.7662 3.73221 54.178 4.81688C52.7746 6.68355 51.3712 8.55023 49.9678 10.4169C49.3454 11.2556 50.5587 12.0059 51.2946 11.3185C53.0834 9.56533 54.4754 7.61668 55.584 5.62392C55.6518 5.44735 55.7311 5.35275 55.8103 5.25815C55.9235 16.6908 50.0647 28.3699 38.8062 34.4497C27.2873 40.6494 12.248 39.4841 2.78879 31.2746C2.48261 31.0666 2.07503 31.4576 2.29056 31.6783C11.739 40.4742 27.6397 41.8538 39.5213 35.6036Z" fill="#E2E2E2"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
