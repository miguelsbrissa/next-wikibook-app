import { Author } from "@/components/Author/author";
import MyHead from "@/components/Head/head";
import axios from "axios";
import db from "database/db";


export default function SingleAuthor({data}) {
    return (
        <>
            <MyHead title={'Wikibook - Author'}/>
            <Author data={data}/>
        </>
    )
}

export async function getStaticPaths() {
    const { data } = await axios.get('http://localhost:3000/api/admin/authors/')

    const allAuthorsPaths = data.map((path) =>{
        return {
            params:{
                single_author: path.link.toString()
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
    const id = context?.params.single_author
    const { data } = await axios.get('http://localhost:3000/api/admin/authors/')

    const authorById = data.find(aut => aut.link === id)
    console.log(authorById)

    return{
        props:{
            data: db.convertDocToStr(authorById)
        }
    }
}
