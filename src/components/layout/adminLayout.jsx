import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const AdminLayout = ({ children }) => {
    const router = useRouter()

    const menu = {
        options: [
            {
                name: 'Categories',
                items: ['List', 'Add'],
                urls: ['/admin/categories', '/admin/categories/add']
            },
            {
                name: 'Books',
                items: ['List', 'Add'],
                urls: ['/admin/books', '/admin/books/add']
            },
            {
                name: 'Authors',
                items: ['List', 'Add'],
                urls: ['/admin/authors', '/admin/authors/add']
            },
        ]
    }
    return (
        <div className='adminLayout'>
            <div className='sidenav'>
                <div className='sidenav__option' >Home
                    {
                        router.pathname === '/admin' && (
                            <Link className='sidenav__item active' href={'/admin'}>Admin</Link>
                        )
                    }
                    {
                        router.pathname !== '/admin' && (
                            <Link className='sidenav__item' href={'/admin'}>Admin</Link>
                        )
                    }
                    <Link className='sidenav__item' href={'/'}>User</Link>
                </div>
                {
                    menu.options.map((opt, i) => (
                        <div key={opt.name} className='sidenav__option'>{opt.name}
                            {
                                opt.items.map((item, i) => (
                                    router.pathname === opt.urls[i] ?
                                        <Link key={opt.name} className='sidenav__item active' href={opt.urls[i]}>{opt.items[i]}</Link>
                                        :
                                        <Link key={opt.name} className='sidenav__item' href={opt.urls[i]}>{opt.items[i]}</Link>
                                ))
                            }
                        </div>
                    ))
                }
            </div>

            {children}

        </div>
    )
}
