import styles from '@/styles/Home.module.sass'
import Menu from '@/components/Menu/menu'

const Homepage = () => {
    return (
        <main className={styles.home}>
            <Menu />
            <div className={styles.content}>
                <h1>
                    Find your next book and where you can buy it
                </h1>
            </div>
        </main>
    )
}

export default Homepage