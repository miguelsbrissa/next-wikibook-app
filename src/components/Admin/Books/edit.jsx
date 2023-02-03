import { AdminLayout } from '@/components/layout/adminLayout'
import axios from 'axios'
import { useDebounce } from 'hooks/useDebouce'
import React, { useEffect, useState } from 'react'

export const Edit = ({ data }) => {
    const [allBooks, setAllBooks] = useState([])
    const { debounce } = useDebounce(10000)

    const handleSubmit = async (event) => {

        const res = await axios.put(`http://localhost:3000/api/admin/books/${data._id}`,
            {
                name: event.target.name.value,
                link: event.target.link.value,
                img: event.target.img.value,
                author: event.target.author.value,
                synopsis: event.target.synopsis.value,
                categorie: event.target.categorie.value,
            }
        )
        alert(res.data.message)
    }

    useEffect(() => {
        debounce(() => {
            async function getData() {
                const res = await axios.get('http://localhost:3000/api/admin/categories/')
                setAllBooks(res.data)
            }
            getData()
        })
    }, [allBooks])

    return (
        <AdminLayout>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form__item'>
                    <label htmlFor='name' className='form__label'>Name</label>
                    <input type={'text'} id='name' name='name' className='form__input' defaultValue={data.name}/>
                </div>

                <div className='form__item'>
                    <label htmlFor='img' className='form__label'>Image URL</label>
                    <input type={'text'} id='img' name='img' className='form__input' defaultValue={data.img}/>
                </div>

                <div className='form__item'>
                    <label htmlFor='author' className='form__label'>Author</label>
                    <input type={'text'} id='author' name='author' className='form__input' defaultValue={data.author}/>
                </div>
                <div className='form__item'>
                    <label htmlFor='categorie' className='form__label'>Categorie</label>

                    <select id='categorie' name='categorie' className='form__select'>
                        <option value={data.categorie}>{data.categorie}</option>
                        {
                            allBooks.map((book, i) => (
                                <option key={book.id} value={book.link}>{book.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='form__item'>
                    <label htmlFor='synopsis' className='form__label'>Synopsis</label>
                    <textarea id='synopsis' name='synopsis' className='form__inputArea' defaultValue={data.synopsis}/>
                </div>
                <div className='form__item'>
                    <label htmlFor='link' className='form__label'>Link</label>
                    <input type={'text'} id='link' name='link' className='form__input' defaultValue={data.link}/>
                </div>
                <div className='form__item'>
                    <button type='submit' className='form__btn'>edit</button>
                </div>
            </form>
        </AdminLayout>
    )
}
