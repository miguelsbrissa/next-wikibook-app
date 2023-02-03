import { AdminLayout } from '@/components/layout/adminLayout'
import axios from 'axios'
import React from 'react'

export const Edit = ({ data }) => {

    const handleSubmit = async (event) => {

        const res = await axios.put(`http://localhost:3000/api/admin/categories/${data._id}`,
            {
                name: event.target.name.value,
                img: event.target.img.value,
                link: event.target.link.value,
            })

        alert(res.data.message)
    }
    return (
        <AdminLayout>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form__item'>
                    <label htmlFor='name' className='form__label'>Name</label>
                    <input type={'text'} id='name' name='name' className='form__input' defaultValue={data.name} />
                </div>

                <div className='form__item'>
                    <label htmlFor='link' className='form__label'>Link</label>
                    <input type={'text'} id='link' name='link' className='form__input' defaultValue={data.link} />
                </div>

                <div className='form__item'>
                    <label htmlFor='img' className='form__label'>Image URL</label>
                    <input type={'text'} id='img' name='img' className='form__input' defaultValue={data.img} />
                </div>
                <div className='form__item'>
                    <button type='submit' className='form__btn'>Edit</button>
                </div>
            </form>
        </AdminLayout>
    )
}
