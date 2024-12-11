import styles from "./styles.module.css"

function LinkList({list}) {
    return(
        <ul className={styles.list}>
            {list.map((item, idx) => (
                <li key={idx} className={styles.item}>
                    <a href={item.url}>{item.text}</a>
                </li>
            ))}
        </ul>    
    )
}

export default LinkList