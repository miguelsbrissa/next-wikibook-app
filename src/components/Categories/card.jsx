import Image from 'next/image'
import React from 'react'
import styles from '@/styles/CategorieCard.module.sass'
import Link from 'next/link'

const CategorieCard = () => {
  return (
    <Link href={'/categories/single_cat'} className={styles.card}>
        <Image src={'/img/cards/scifi.png'} width={100} height={100} alt={'Sci-fi'}/>
        <h1>Sci-fi</h1>
    </Link>
  )
}

export default CategorieCard