import { Edit } from "@/components/Admin/Author/edit";
import MyHead from "@/components/Head/head";
import axios from "axios";
import db from "database/db";

export default function AdminAuthorsEdit({ data }) {
    return (
        <>
            <MyHead title={'Wikibook - Edit author'} />
            <Edit data={data} />
        </>
    )
}

export async function getStaticPaths() {
    const { data } = await axios.get('http://localhost:3000/api/admin/authors/')

    const allAuthorsPaths = data.map((path) =>{
        return {
            params:{
                id: path._id.toString()
            }
        }
    })
    console.log(allAuthorsPaths)
    return{
        paths: allAuthorsPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context?.params.id
    const { data } = await axios.get('http://localhost:3000/api/admin/authors/')

    const authorById = data.find(aut => aut._id === id)
    console.log(authorById)

    return{
        props:{
            data: db.convertDocToStr(authorById)
        }
    }
}