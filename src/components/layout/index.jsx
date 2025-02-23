import styles from "./styles.module.css"

function Layout({children}) {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    )
}

export default Layout