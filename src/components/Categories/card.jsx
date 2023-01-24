import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const CategorieCard = ({data}) => {
  return (
    <Link href={`/categories/${data.link}`} className={'cardcat'}>
        <Image src={data.img} width={100} height={100} alt={'Sci-fi'}/>
        <h1>{data.name}</h1>
    </Link>
  )
}

export default CategorieCard