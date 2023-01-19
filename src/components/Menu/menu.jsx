import React from 'react'
import styles from '@/styles/Nav.module.sass'
import Link from 'next/link'

const Menu = () => {
    return (
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

export default Menu