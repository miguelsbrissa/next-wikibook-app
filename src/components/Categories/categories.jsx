import React from 'react'
import styles from '@/styles/Categories.module.sass'
import Menu from '../Menu/menu'
import CategorieCard from './card'

const CategoriesPage = () => {
    return (
        <div className={styles.categories}>
            <div className={styles.categories__header}>
                <Menu />
            </div>
            <div className={styles.categories__content}>
                <CategorieCard />
                <CategorieCard />
                <CategorieCard />
                <CategorieCard />
                <CategorieCard />
                <CategorieCard />
                <CategorieCard />
                <CategorieCard />
            </div>
        </div>
    )
}

export default CategoriesPage