import { Book } from "@/components/Book/book";
import MyHead from "@/components/Head/head";

export default function SingleBook() {
    return (
        <>
            <MyHead title={'Wikibook - SingleBook'} />
            <Book />
        </>
    )
}