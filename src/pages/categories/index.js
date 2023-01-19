import CategoriesPage from '@/components/Categories/categories'
import MyHead from '@/components/Head/head'
import React from 'react'

export default function Categories() {
    return (
        <>
            <MyHead title={'Wikibook - Categories'} />
            <CategoriesPage />
        </>
    )
}
