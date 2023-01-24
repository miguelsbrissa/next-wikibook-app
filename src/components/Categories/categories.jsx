import React from 'react'
import Menu from '../Menu/menu'
import CategorieCard from './card'

const CategoriesPage = ({data}) => {
    return (
        <div className={'categories'}>
            <div className={'categories__header'}>
                <Menu />
            </div>
            <div className={'categories__content'}>
                {
                    data.map(cat => (
                        <CategorieCard key ={cat.name} data={cat}/>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoriesPage