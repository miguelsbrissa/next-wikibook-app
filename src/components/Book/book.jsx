import React from 'react'
import Menu from '../Menu/menu'
import Image from 'next/image'
import Link from 'next/link'

export const BookInfo = ({ data }) => {
  return (
    <div className={'book'}>
      <div className={'book__header'}>
        <Menu />
      </div>
      <div className={'book__content'}>
        <div className={'book__img'}>
          <Image src={data.img} width={300} height={500} alt={'Dune'} />
        </div>
        <div className={'book__info'}>
          <h1>{data.name}</h1>
          <h2>{`By ${data.author}`}</h2>
          <p>{data.synopsis}</p>
          <div className={'book__buy'}>
            <h2>Where to buy</h2>
            <div className={'book_stores'}>
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
