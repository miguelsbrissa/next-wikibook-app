import React from 'react'
import styles from '@/styles/Book.module.sass'
import Menu from '../Menu/menu'
import Image from 'next/image'
import Link from 'next/link'

export const BookInfo = ({data}) => {
  return (
    <div className={styles.book}>
      <div className={styles.book__header}>
        <Menu />
      </div>
      <div className={styles.book__content}>
        <div className={styles.book__img}>
          <Image src={data.img} width={450} height={600} alt={'Dune'} />
        </div>
        <div className={styles.book__info}>
          <h1>{data.name}</h1>
          <h2>{`By ${data.author}`}</h2>
          <p>{data.synopsis}</p>
          <div className={styles.book__buy}>
            <h2>Where to buy</h2>
            <div className={styles.book_stores}>
              <Link href={'/'}>
                <Image src={'/img/buy/amazon.png'} width={100} height={100} alt={'Amazon'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
