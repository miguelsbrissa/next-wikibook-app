import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const BookCard = ({data}) => {
  return (
    <div className={'cardbook'}>
      <h2>{data.name}</h2>
      <Image src={data.img} width={200} height={300} alt={'Dune'} />
      <h2>{`By ${data.author}`}</h2>
      <div className={'cardbook__btns'}>
        <Link href={`/categories/${data.categorie}/${data.link}`} className={'cardbook__btn'}>
          <p>View book</p>
        </Link>
        <Link href={`/authors/${data.author}`} className={'cardbook__btn'}>
          <p>View author</p>
        </Link>
      </div>
    </div>
  )
}