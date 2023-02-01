import { Add } from "@/components/Admin/Books/add";
import MyHead from "@/components/Head/head";

export default function AdminBooksAdd() {
    return (
        <>
            <MyHead title={'Wikibook - Add Books'} />
            <Add />
        </>
    )
}