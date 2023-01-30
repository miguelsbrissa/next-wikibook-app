import { AdminLayout } from '@/components/layout/adminLayout'
import { SimpleList } from '@/components/List/simple-list'
import React from 'react'

export const CategorieList = () => {
    return (
        <AdminLayout>
            <div className='catlist'>
                <SimpleList />
            </div>
        </AdminLayout>
    )
}
