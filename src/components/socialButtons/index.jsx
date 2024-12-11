import styles from "./styles.module.css"

function SocialButtons({list}) {
    return(
        <ul className={styles.list}>
            {list.map((item, idx) => (
                <li className={styles.item} key={idx}>
                    <a href={item.url}>
                        {item.icon}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default SocialButtons