/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import styles from "./Hero.module.css"
import Button from "../Ui/Button";

function Hero() {

    
     const [movie, setMovie] = useState("")

    async function fetchMovie() {
        const response = await fetch(
          "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
          )
                
        const data = await response.json();
        setMovie(data)
        }

        useEffect(() => {
            fetchMovie();
          },[]);
    
    console.log(movie)

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>{movie.Title}</h2>
                    <h3 className={styles.hero__genre}>{movie.Genre}</h3>
                    <p className={styles.hero__desc}>{movie.Plot}.</p>
                    <Button variant="primary">Watch Movie</Button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__img} src={movie.Poster} alt={movie.Title} />
                </div>
            </section>
        </div>

    )

}
export default Hero