import React from 'react'
import styles from '@/styles/SingleCat.module.sass'
import Menu from '../Menu/menu'
import { BookCard } from '../Book/card'

const SingleCategorie = ({ data }) => {
  return (
    <div className={styles.cat}>
      <div className={styles.cat__header}>
        <Menu />
      </div>
      <div className={styles.cat__content}>
        {
          data.map(book => (
            <BookCard key={book.name} data={book} />
          ))
        }
      </div>
    </div>
  )
}

export default SingleCategorie