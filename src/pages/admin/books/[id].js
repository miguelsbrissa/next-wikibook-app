import { Edit } from "@/components/Admin/Books/edit";
import MyHead from "@/components/Head/head";
import axios from "axios";
import db from "database/db";

export default function AdminBooksEdit({ data }) {
    return (
        <>
            <MyHead title={'Wikibook - Edit book'} />
            <Edit data={data} />
        </>
    )
}

export async function getStaticPaths() {
    const { data } = await axios.get('http://localhost:3000/api/admin/books/')

    const allBooksPaths = data.map((path) =>{
        return {
            params:{
                id: path._id.toString()
            }
        }
    })
    console.log(allBooksPaths)
    return{
        paths: allBooksPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context?.params.id
    const { data } = await axios.get('http://localhost:3000/api/admin/books/')

    const bookById = data.find(book => book._id === id)
    console.log(bookById)

    return{
        props:{
            data: db.convertDocToStr(bookById)
        }
    }
}