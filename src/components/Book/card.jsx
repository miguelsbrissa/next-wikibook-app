import React from 'react'
import styles from '@/styles/BookCard.module.sass'
import Link from 'next/link'
import Image from 'next/image'

export const BookCard = () => {
  return (
    <div className={styles.card}>
      <h2>Dune</h2>
      <Image src={'/img/books/dune1.jpg'} width={200} height={300} alt={'Dune'} />
      <h2>By Frank Herbert</h2>
      <div className={styles.card__btns}>
        <Link href={'/categories/single_cat/single_book'} className={styles.card__btn}>
          <p>View book</p>
        </Link>
        <Link href={'/authors/single_author'} className={styles.card__btn}>
          <p>View author</p>
        </Link>
      </div>
    </div>
  )
}