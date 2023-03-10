import { AdminLayout } from '@/components/layout/adminLayout'
import { SimpleList } from '@/components/List/simple-list'
import React from 'react'

export const CategorieList = ({data}) => {
    return (
        <AdminLayout>
            <div className='list'>
                <SimpleList data={data} type={'cat'}/>
            </div>
        </AdminLayout>
    )
}
