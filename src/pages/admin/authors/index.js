import { AuthorList } from "@/components/Admin/Author/authorList";
import MyHead from "@/components/Head/head";
import axios from "axios";
import db from "database/db"

export default function AdminAuthors({data}) {
    return (
        <>
            <MyHead title={'WikiAuthor - Authors List'} />
            <AuthorList data = {data}/>
        </>
    )
}

export async function getStaticProps() {

    const { data } = await axios.get('http://localhost:3000/api/admin/authors/')
    console.log(data)   

    return {
        props: {
            data: data.map(author => db.convertDocToStr(author))
        }
    }
}