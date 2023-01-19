import React from 'react'
import styles from '@/styles/Book.module.sass'
import Menu from '../Menu/menu'
import Image from 'next/image'
import Link from 'next/link'

export const Book = () => {
  return (
    <div className={styles.book}>
      <div className={styles.book__header}>
        <Menu />
      </div>
      <div className={styles.book__content}>
        <div className={styles.book__img}>
          <Image src={'/img/books/dune1.jpg'} width={450} height={600} alt={'Dune'} />
        </div>
        <div className={styles.book__info}>
          <h1>Duna</h1>
          <h2>By Frank Herbert</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum vulputate massa ac malesuada.
            Duis vitae egestas purus. Vivamus a magna odio. Suspendisse laoreet pretium velit eu cursus.
            Maecenas feugiat erat eu mauris porta vulputate.
            Vestibulum vitae accumsan quam. Nullam condimentum justo ante, in lobortis odio tristique at.</p>
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
