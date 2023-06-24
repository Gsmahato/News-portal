import React from 'react'
import styles from "../src/app/page.module.css";
import Link from 'next/link';
import Image from 'next/image';


const Latestnews = () => {
  return (
    <>
    <section className={styles.latest}>
        <div className={styles.news_container}>
            <h2>
                <Link href="/"></Link>
            </h2>
            <div className={styles.title_info}>
                <div className={styles.news_author}>
                    <span className={styles.author_icon}>
                        <Image/>
                    </span>
                    <span>नेपाल नेपाल</span>
                </div>
                <div className={styles.post_hour}>
                    <i></i>
                    <span>५ मिनेट अगाडि</span>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Latestnews