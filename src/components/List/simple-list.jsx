import Image from 'next/image'
import React from 'react'

export const SimpleList = () => {
    const handleEdit = () => {
        alert('Editar')
    }
    const handleDelete = () => {
        alert('Deletar')
    }
    return (
        <table className='simplelist'>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Image URL</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>Sci-fi</td>
                <td>scifi</td>
                <td>/img/cards/scifi.png</td>
                <td>
                    <div className='simplelist__btns'>
                        <button className='simplelist__btn' onClick={() => handleEdit()}><Image src={'/img/edit.png'} width={30} height={30} /></button>
                        <button className='simplelist__btn' onClick={() => handleDelete()}><Image src={'/img/delete.png'} width={30} height={30} /></button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Fantasy</td>
                <td>fantasy</td>
                <td>/img/cards/fantasy.png</td>
                <td>
                    <div className='simplelist__btns'>
                        <button className='simplelist__btn' onClick={() => handleEdit()}><Image src={'/img/edit.png'} width={30} height={30} /></button>
                        <button className='simplelist__btn' onClick={() => handleDelete()}><Image src={'/img/delete.png'} width={30} height={30} /></button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Horror</td>
                <td>horror</td>
                <td>/img/cards/horror.png</td>
                <td>
                    <div className='simplelist__btns'>
                        <button className='simplelist__btn' onClick={() => handleEdit()}><Image src={'/img/edit.png'} width={30} height={30} /></button>
                        <button className='simplelist__btn' onClick={() => handleDelete()}><Image src={'/img/delete.png'} width={30} height={30} /></button>
                    </div>
                </td>
            </tr>

        </table>
    )
}
