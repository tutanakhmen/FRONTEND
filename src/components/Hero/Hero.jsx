/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import styles from "./Hero.module.css"
import Button from "../Ui/Button";
import axios from "axios";

function Hero() {    
     const [movie, setMovie] = useState("")
     const API_KEY = import.meta.env.VITE_APIKEY;
     const genres = movie && movie.genres.map((genre) => genre.name).join(", ")
    //  const idTrailer = movie && movie.videos.results[0].key
    

     useEffect(() => {
        
        async function getTrendingMovies() {
            const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
            const response = await axios(URL)
            
            return response.data.results[0]
    
         }
    
         async function getDetailMovie() {
            const trendingMovie = await getTrendingMovies()
            const id = trendingMovie.id
    
            const params = `?api_key=${API_KEY}&append_to_response=videos.data`
            const URL = `https://api.themoviedb.org/3/movie/${id}${params}`
            const response = await axios(URL)
            console.log(response.data)
    
            setMovie(response.data)
            }

        getDetailMovie()
     }, [])

     

       return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>{movie.title}</h2>
                    <h3 className={styles.hero__genre}>{genres}</h3>
                    <p className={styles.hero__desc}>{movie.overview}.</p>
                    <Button>Watch Movie</Button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__img} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.Title} />
                </div>
            </section>
        </div>

    )

}
export default Hero