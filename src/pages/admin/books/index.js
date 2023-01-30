import { BookList } from "@/components/Admin/Books/BookList";
import MyHead from "@/components/Head/head";
import axios from "axios";
import db from "database/db"

export default function AdminBooks({data}) {
    return (
        <>
            <MyHead title={'Wikibook - Books List'} />
            <BookList data = {data}/>
        </>
    )
}

export async function getStaticProps() {

    const { data } = await axios.get('http://localhost:3000/api/admin/books/')
    console.log(data)   

    return {
        props: {
            data: data.map(book => db.convertDocToStr(book))
        }
    }
}