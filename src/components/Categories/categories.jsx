import React from 'react'
import styles from '@/styles/Categories.module.sass'
import Menu from '../Menu/menu'
import CategorieCard from './card'

const CategoriesPage = ({data}) => {
    return (
        <div className={styles.categories}>
            <div className={styles.categories__header}>
                <Menu />
            </div>
            <div className={styles.categories__content}>
                {
                    data.map(cat => (
                        <CategorieCard key ={cat.name} data={cat}/>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoriesPage