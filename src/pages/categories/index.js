import CategoriesPage from '@/components/Categories/categories'
import MyHead from '@/components/Head/head'
import axios from 'axios'
import React from 'react'
import db from "database/db"
import Categorie from 'models/Categorie'

export default function Categories({ data }) {
    return (
        <>
            <MyHead title={'Wikibook - Categories'} />
            <CategoriesPage data={data} />
        </>
    )
}

export async function getStaticProps() {
    await db.connect()

    const cat = await Categorie.find().lean()
    console.log(cat.map(db.convertDocToObj))
    return {
        props: {
            data: cat.map(db.convertDocToObj)
        }
    }
}