import { AdminLayout } from '@/components/layout/adminLayout'
import axios from 'axios'
import { useDebounce } from 'hooks/useDebouce'
import React, { useEffect, useState } from 'react'

export const Add = () => {
    const [allBooks, setAllBooks] = useState([])
    const { debounce } = useDebounce(10000)
    const handleSubmit = async (event) => {
        const data = {
            name: event.target.name.value,
            link: event.target.link.value,
            img: event.target.img.value,
            author: event.target.author.value,
            synopsis: event.target.synopsis.value,
            categorie: event.target.categorie.value,
        }

        await axios.post('http://localhost:3000/api/admin/books/', data)

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
                    <input type={'text'} id='name' name='name' className='form__input' />
                </div>

                <div className='form__item'>
                    <label htmlFor='img' className='form__label'>Image URL</label>
                    <input type={'text'} id='img' name='img' className='form__input' />
                </div>

                <div className='form__item'>
                    <label htmlFor='author' className='form__label'>Author</label>
                    <input type={'text'} id='author' name='author' className='form__input' />
                </div>
                <div className='form__item'>
                    <label htmlFor='categorie' className='form__label'>Categorie</label>
                    
                    <select id='categorie' name='categorie' className='form__select'>
                        <option value={0}>Select a book</option>
                        {
                            allBooks.map((book, i) => (
                                <option key={book.id} value={book.link}>{book.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='form__item'>
                    <label htmlFor='synopsis' className='form__label'>Synopsis</label>
                    <textarea id='synopsis' name='synopsis' className='form__inputArea' />
                </div>
                <div className='form__item'>
                    <label htmlFor='link' className='form__label'>Link</label>
                    <input type={'text'} id='link' name='link' className='form__input' />
                </div>
                <div className='form__item'>
                    <button type='submit' className='form__btn'>add</button>
                </div>
            </form>
        </AdminLayout>
    )
}
