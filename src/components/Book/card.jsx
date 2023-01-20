import React from 'react'
import styles from '@/styles/BookCard.module.sass'
import Link from 'next/link'
import Image from 'next/image'

export const BookCard = ({data}) => {
  return (
    <div className={styles.card}>
      <h2>{data.name}</h2>
      <Image src={data.img} width={200} height={300} alt={'Dune'} />
      <h2>{`By ${data.author}`}</h2>
      <div className={styles.card__btns}>
        <Link href={`/categories/${data.categorie}/${data.link}`} className={styles.card__btn}>
          <p>View book</p>
        </Link>
        <Link href={'/authors/single_author'} className={styles.card__btn}>
          <p>View author</p>
        </Link>
      </div>
    </div>
  )
}