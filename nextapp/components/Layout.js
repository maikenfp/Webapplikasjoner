import styles from '../styles/Home.module.css'

const Layout = ({wrapper}) => {

    return(
        <section className={styles.container}>{wrapper}</section>
    )

}

export default Layout