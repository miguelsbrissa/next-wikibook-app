import Image from 'next/image'
import React from 'react'

export const SimpleList = ({ data, type }) => {
    const handleEdit = () => {
        alert('Editar')
    }
    const handleDelete = () => {
        alert('Deletar')
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
                                    <button className='simplelist__btn' onClick={() => handleEdit()}><Image src={'/img/edit.png'} width={30} height={30} /></button>
                                    <button className='simplelist__btn' onClick={() => handleDelete()}><Image src={'/img/delete.png'} width={30} height={30} /></button>
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
                                    <button className='simplelist__btn' onClick={() => handleEdit()}><Image src={'/img/edit.png'} width={30} height={30} /></button>
                                    <button className='simplelist__btn' onClick={() => handleDelete()}><Image src={'/img/delete.png'} width={30} height={30} /></button>
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
                                    <button className='simplelist__btn' onClick={() => handleEdit()}><Image src={'/img/edit.png'} width={30} height={30} /></button>
                                    <button className='simplelist__btn' onClick={() => handleDelete()}><Image src={'/img/delete.png'} width={30} height={30} /></button>
                                </div>
                            </td>
                        </tr>
                    ))
                )
            }
        </table>
    )
}
