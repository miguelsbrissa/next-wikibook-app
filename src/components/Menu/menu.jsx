import React, { useState } from 'react'
import styles from '@/styles/Nav.module.sass'
import Link from 'next/link'

const Menu = () => {
    const [open, setOpen] = useState(true)
    const handleNav = () => {
        setOpen(!open)
    }
    return (
        <>
            <div className={styles.menu} onClick={handleNav}>
                <span className={styles.menu__btn}></span>
            </div>
            {
                open && (
                    <nav className={styles.nav}>
                        <ul className={styles.menu_nav}>
                            <li>
                                <Link className={styles.menu_nav__item} href={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link className={styles.menu_nav__item} href={'/categories'}>Categories</Link>
                            </li>
                            <li>
                                <Link className={styles.menu_nav__item} href={'/about'}>About us</Link>
                            </li>
                        </ul>
                    </nav>
                )
            }
        </>
    )
}

export default Menu