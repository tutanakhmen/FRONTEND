import styles from "./Hero.module.css"
import image from "../../assets/hero.png"

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Covid ID</h2>
                    <h3 className={styles.hero__genre}>Monitoring Perkembangan Covid</h3>
                    <p className={styles.hero__desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quo rerum, exercitationem eligendi odio dolorem ipsa. Eum ab non debitis.</p>
                    <button className={styles.hero__button}>Vaccine</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__img} src={image} alt="" />
                </div>
            </section>
        </div>
    )
}
export default Hero