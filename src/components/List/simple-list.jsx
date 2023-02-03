import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export const SimpleList = ({ data, type }) => {
    const router = useRouter()
    const handleEdit = (id, type) => {
        switch (type) {
            case 'categories':
                router.push(`http://localhost:3000/admin/categories/${id}`)
                break;
            case 'books':
                router.push(`http://localhost:3000/admin/books/${id}`)
                break;
            case 'authors':
                router.push(`http://localhost:3000/admin/authors/${id}`)
                break;
            default:
                break;
        }
    }
    const handleDelete = async (id, name, type) => {
        let del = confirm(`Are you sure you to delete ${name}?`)

        if (del) {
            const { data } = await axios.delete(`http://localhost:3000/api/admin/${type}/${id}`)
            alert(data.message)
            location.reload(true)
        }
    }

    const bookH = ['Name', 'Image URL', 'Author', 'Categorie', 'Synopsis', 'URL']
    const catH = ['Name', 'URL', 'Image URL']
    const authorH = ['Name', 'Image URL', 'History', 'Books', 'URL']
    return (
        <table className='simplelist'>
            <tr>
                {
                    type === 'book' && (
                        bookH.map((col, i) => (
                            <th key={col}>{col}</th>
                        ))
                    )
                }
                {
                    type === 'cat' && (
                        catH.map((col, i) => (
                            <th key={col}>{col}</th>
                        ))
                    )
                }
                {
                    type === 'author' && (
                        authorH.map((col, i) => (
                            <th key={col}>{col}</th>
                        ))
                    )
                }
                <th>Action</th>
            </tr>
            {
                type === 'cat' && (
                    data.map((row, i) => (
                        <tr key={row.id}>
                            <td>{row.name}</td>
                            <td>{row.link}</td>
                            <td>{row.img}</td>
                            <td>
                                <div className='simplelist__btns'>
                                    <button className='simplelist__btn' onClick={() => handleEdit(row._id, 'categories')}><Image src={'/img/edit.png'} width={30} height={30} /></button>
                                    <button className='simplelist__btn' onClick={() => handleDelete(row._id, row.name, 'categories')}><Image src={'/img/delete.png'} width={30} height={30} /></button>
                                </div>
                            </td>
                        </tr>
                    ))
                )
            }
            {
                type === 'book' && (
                    data.map((row, i) => (
                        <tr key={row.id}>
                            <td>{row.name}</td>
                            <td>{row.img}</td>
                            <td>{row.author}</td>
                            <td>{row.categorie}</td>
                            <td>{row.synopsis}</td>
                            <td>{row.link}</td>
                            <td>
                                <div className='simplelist__btns'>
                                    <button className='simplelist__btn' onClick={() => handleEdit(row._id, 'books')}><Image src={'/img/edit.png'} width={30} height={30} /></button>
                                    <button className='simplelist__btn' onClick={() => handleDelete(row._id, row.name, 'books')}><Image src={'/img/delete.png'} width={30} height={30} /></button>
                                </div>
                            </td>
                        </tr>
                    ))
                )
            }
            {
                type === 'author' && (
                    data.map((row, i) => (
                        <tr key={row.id}>
                            <td>{row.name}</td>
                            <td>{row.img}</td>
                            <td>{row.history}</td>
                            <td>{row.books}</td>
                            <td>{row.link}</td>
                            <td>
                                <div className='simplelist__btns'>
                                    <button className='simplelist__btn' onClick={() => handleEdit(row._id, 'authors')}><Image src={'/img/edit.png'} width={30} height={30} /></button>
                                    <button className='simplelist__btn' onClick={() => handleDelete(row._id, row.name, 'authors')}><Image src={'/img/delete.png'} width={30} height={30} /></button>
                                </div>
                            </td>
                        </tr>
                    ))
                )
            }
        </table>
    )
}
