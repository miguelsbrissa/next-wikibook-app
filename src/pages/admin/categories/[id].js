import { Edit } from "@/components/Admin/Categories/edit";
import MyHead from "@/components/Head/head";
import axios from "axios";
import db from "database/db";

export default function AdminCategoriesEdit({ data }) {
    return (
        <>
            <MyHead title={'Wikibook - Edit categorie'} />
            <Edit data={data} />
        </>
    )
}

export async function getStaticPaths() {
    const { data } = await axios.get('http://localhost:3000/api/admin/categories/')

    const allCatPaths = data.map((path) =>{
        return {
            params:{
                id: path._id.toString()
            }
        }
    })
    console.log(allCatPaths)
    return{
        paths: allCatPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context?.params.id
    const { data } = await axios.get('http://localhost:3000/api/admin/categories/')

    const catById = data.find(cat => cat._id === id)
    console.log(catById)

    return{
        props:{
            data: db.convertDocToStr(catById)
        }
    }
}