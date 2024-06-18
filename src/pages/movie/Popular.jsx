import axios from "axios";
import { useEffect, useState, } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";



function Popular() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchPopularMovies(){
            const API_KEY = import.meta.env.VITE_APIKEY;
            const URL = `http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    
            const response = await axios(URL)
            setMovies(response.data.result)
    
        }

        fetchPopularMovies();
    }, [])

    console.log(movies)

    return (
        <div>
            <Hero />
            <Movies movies={movies}/>
        <h2>Popular Movie</h2>

        </div>
    )
}

export default Popular