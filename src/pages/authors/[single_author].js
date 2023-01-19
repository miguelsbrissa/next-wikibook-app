import { Author } from "@/components/Author/author";
import MyHead from "@/components/Head/head";


export default function SingleAuthor() {
    return (
        <>
            <MyHead title={'Wikibook - Author'}/>
            <Author />
        </>
    )
}