import styles from "./Indonesia.module.css"
function Indonesia() {
    return (
        <div className={styles.container}>
        <section className={styles.negara}>
                <h1 className={styles.negara__title}>Indonesia</h1>
                <h3 className={styles.negara__info}>Data Covid Berdasarkan Indonesia</h3>
        </section>

        <div className={styles.card__container}>
            <div className={styles.card}>
                <h1 className={styles.card__heading}>Confirmed</h1>
                <h1 className={styles.card__confirmed}>605.646</h1>
            </div>

            <div className={styles.card}>
                <h1 className={styles.card__heading}>Recovered</h1>
                <h1 className={styles.card__recovered}>90.000</h1>
            </div>

            <div className={styles.card}>
                <h1 className={styles.card__heading}>Death</h1>
                <h1 className={styles.card__death}>5.000</h1>
            </div>
        </div>
        </div>
        
    )
}

export default Indonesia
