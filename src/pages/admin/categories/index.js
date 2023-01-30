import { CategorieList } from "@/components/Admin/Categories/categorieList";
import MyHead from "@/components/Head/head";

export default function AdminCategories() {
    return (
        <>
            <MyHead title={'Wikibook - Categories List'}/>
            <CategorieList />
        </>
    )
}