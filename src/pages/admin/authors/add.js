import { Add } from "@/components/Admin/Author/add";
import MyHead from "@/components/Head/head";

export default function AdminAuthorsAdd() {
    return (
        <>
            <MyHead title={'Wikibook - Add Authors'} />
            <Add />
        </>
    )
}