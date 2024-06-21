import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../Ui/Button";
import styles from "./DetailMovie.module.css"


function DetailMovie() {
    const { id } = useParams();
    const [idTrailer, setIdTrailer] = useState("");
    const [movie, setMovie] = useState(null); // Initialize movie as null initially
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");

    useEffect(() => {
        async function getDetailMovie() {
            try {
                const API_KEY = import.meta.env.VITE_APIKEY;
                const params = `?api_key=${API_KEY}&append_to_response=videos`;
                const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
                const response = await axios.get(URL);
                setMovie(response.data);

                if (response.data.videos.results.length > 0) {
                    setIdTrailer(response.data.videos.results[0].key);
                }
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        }

        getDetailMovie(); // Invoke the function to fetch movie details
    }, [id]); // Include id in the dependency array to fetch details when id changes

    if (!movie) {
        return <div>Loading...</div>; // Add a loading state while fetching data
    }

    return (
        <div className={styles}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>{movie.title}</h2>
                    <h3 className={styles.hero__genre}>{genres}</h3>
                    <p className={styles.hero__desc}>{movie.overview}.</p>
                    {idTrailer && (
                        <Button as="a" href={`https://www.youtube.com/watch?v=${idTrailer}`} target="_blank">
                            Watch Movie
                        </Button>
                    )}
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__img} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
                </div>
            </section>
        </div>
    );
}

export default DetailMovie;
