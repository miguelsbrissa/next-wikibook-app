import React from 'react'
import styles from '@/styles/SingleCat.module.sass'
import Menu from '../Menu/menu'
import { BookCard } from '../Book/card'

const SingleCategorie = () => {
  return (
    <div className={styles.cat}>
        <div className={styles.cat__header}>
            <Menu />
        </div>
        <div className={styles.cat__content}>
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
        </div>
    </div>
  )
}

export default SingleCategorie