import React from 'react'
import Link from 'next/link'

export const AdminLayout = ({ children }) => {
    return (
        <div className='adminLayout'>
            <div className='sidenav'>
                <div className='sidenav__option' >Home
                    <Link className='sidenav__item' href={'/admin'}>Admin</Link>
                    <Link className='sidenav__item' href={'/'}>User</Link>
                </div>
                <div className='sidenav__option' >Categories
                    <Link className='sidenav__item' href={'/admin/categories'}>List</Link>
                    <Link className='sidenav__item' href={'/admin/categories/add'}>Add</Link>
                </div>
                <div className='sidenav__option' >Books
                    <Link className='sidenav__item' href={'/admin/books'}>List</Link>
                    <Link className='sidenav__item' href={'/admin/books/add'}>Add</Link></div>
                <div className='sidenav__option' >Authors
                    <Link className='sidenav__item' href={'/admin/authors'}>List</Link>
                    <Link className='sidenav__item' href={'/admin/authors/add'}>Add</Link></div>
            </div>

            {children}

        </div>
    )
}
