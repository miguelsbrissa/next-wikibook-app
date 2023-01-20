import { BookInfo } from "@/components/Book/book";
import MyHead from "@/components/Head/head";
import Book from "models/Book";
import db from "database/db"

export default function SingleBook({data}) {
    return (
        <>
            <MyHead title={`Wikibook - ${data.name}`} />
            <BookInfo data={data}/>
        </>
    )
}

export async function getStaticPaths() {
    await db.connect()
    const book = await Book.find().lean()

    const allBookPaths = book.map(path => {
        return {
            params: {
                single_cat: path.categorie.toString(),
                single_book: path.link.toString()
            }
        }
    })
    console.log(allBookPaths)
    return {
        paths: allBookPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context?.params.single_book
    const allBooks = await Book.find().lean()

    const bookById = allBooks.find(b => b.link === id)
    console.log(bookById)

    return{
        props:{
            data: db.convertDocToStr(bookById)
        }
    }
}