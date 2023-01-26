import { HomeAdmin } from "@/components/Admin/home";
import MyHead from "@/components/Head/head";

export default function Admin() {
    return (
        <>
            <MyHead title={'Wikibook - Admin'} />
            <HomeAdmin />
        </>
    )
}