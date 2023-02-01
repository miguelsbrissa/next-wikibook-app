import { AdminLayout } from '@/components/layout/adminLayout'
import axios from 'axios'
import React from 'react'

export const Add = () => {
    const handleSubmit = async (event) => {
        const data = {
            name: event.target.name.value,
            link: event.target.link.value,
            img: event.target.img.value,
        }

        await axios.post('http://localhost:3000/api/admin/categories/', data)
    }
    return (
        <AdminLayout>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form__item'>
                    <label htmlFor='name' className='form__label'>Name</label>
                    <input type={'text'} id='name' name='name' className='form__input' />
                </div>

                <div className='form__item'>
                    <label htmlFor='link' className='form__label'>Link</label>
                    <input type={'text'} id='link' name='link' className='form__input' />
                </div>

                <div className='form__item'>
                    <label htmlFor='img' className='form__label'>Image URL</label>
                    <input type={'text'} id='img' name='img' className='form__input' />
                </div>
                <div className='form__item'>
                    <button type='submit' className='form__btn'>add</button>
                </div>
            </form>
        </AdminLayout>
    )
}
