import React from 'react'
import Menu from '../Menu/menu'
import Link from 'next/link'
import Image from 'next/image'

export const Author = () => {
  return (
    <div className={'author'}>
      <div className={'author__header'}>
        <Menu />
      </div>
      <div className={'author__content'}>
        <div className={'author__img'}>
          <Image src={'/img/authors/frankherbert.jpg'} width={300} height={300} alt={'Dune'} />
        </div>
        <div className={'author__info'}>
          <h1>Frank Herbert</h1>
          <h2>History</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum vulputate massa ac malesuada.
            Duis vitae egestas purus. Vivamus a magna odio. Suspendisse laoreet pretium velit eu cursus.
            Maecenas feugiat erat eu mauris porta vulputate.
            Vestibulum vitae accumsan quam. Nullam condimentum justo ante, in lobortis odio tristique at.</p>
          <div className={'author__buy'}>
            <h2>Books</h2>
            <div className={'author_stores'}>
              <Link href={'/categories/single_cat/single_book'}>
                <Image src={'/img/books/dune1.jpg'} width={100} height={150} alt={'Amazon'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
