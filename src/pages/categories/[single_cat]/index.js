import SingleCategorie from '@/components/Categories/categorie'
import MyHead from '@/components/Head/head'
import Book from 'models/Book'
import React from 'react'
import db from "database/db"
import Categorie from 'models/Categorie'
import axios from 'axios'

export default function SingleCat({ data, pageName }) {
    return (
        <>
            <MyHead title={`Wikibook - ${pageName}`} />
            <SingleCategorie data={data} />
        </>
    )
}

export async function getStaticPaths() {
    await db.connect()
    const cat = await Categorie.find().lean()

    const allCatPaths = cat.map(path => {
        return {
            params: {
                single_cat: path.link.toString()
            }
        }
    })
    //console.log(allCatPaths)
    return {
        paths: allCatPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context?.params.single_cat
    const allBooks = await Book.find().lean()

    const booksByCat = allBooks.filter(b => b.categorie === id)
    //console.log(allBooks)

    return {
        props: {
            data: booksByCat.map(book => db.convertDocToStr(book)),
            pageName: id
        }
    }
}