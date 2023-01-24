import React, { useState } from 'react'
import Link from 'next/link'

const Menu = () => {
    const [open, setOpen] = useState(true)
    const handleNav = () => {
        setOpen(!open)
    }
    return (
        <>
            <div className={'menu'} onClick={handleNav}>
                <span className={'menu__btn'}></span>
            </div>
            {
                open && (
                    <nav className={'nav'}>
                        <ul className={'menu_nav'}>
                            <li>
                                <Link className={'menu_nav__item'} href={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link className={'menu_nav__item'} href={'/categories'}>Categories</Link>
                            </li>
                            <li>
                                <Link className={'menu_nav__item'} href={'/about'}>About us</Link>
                            </li>
                        </ul>
                    </nav>
                )
            }
        </>
    )
}

export default Menu