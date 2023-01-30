import { CategorieList } from "@/components/Admin/Categories/categorieList";
import MyHead from "@/components/Head/head";
import axios from "axios";
import db from "database/db"

export default function AdminCategories({data}) {
    return (
        <>
            <MyHead title={'Wikibook - Categories List'} />
            <CategorieList data = {data}/>
        </>
    )
}

export async function getStaticProps() {

    const { data } = await axios.get('http://localhost:3000/api/admin/categories/')
    console.log(data)   

    return {
        props: {
            data: data.map(cate => db.convertDocToStr(cate))
        }
    }
}