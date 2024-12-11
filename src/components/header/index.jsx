import styles from "./styles.module.css"

function Header({image, name, description}) {
    return(
        <header className={styles.header}>
            <img src={image} />
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.description}>{description}</p>
        </header>
    )
}

export default Header