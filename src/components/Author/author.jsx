import React from 'react'
import Menu from '../Menu/menu'
import Link from 'next/link'
import Image from 'next/image'

export const Author = ({data}) => {
  return (
    <div className={'author'}>
      <div className={'author__header'}>
        <Menu />
      </div>
      <div className={'author__content'}>
        <div className={'author__img'}>
          <Image src={data.img} width={300} height={300} alt={'Dune'} />
        </div>
        <div className={'author__info'}>
          <h1>{data.name}</h1>
          <h2>History</h2>
          <p>{data.history}</p>
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
