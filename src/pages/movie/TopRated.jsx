import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import axios from "axios";
import Movies from "../../components/Movies/Movies";

function TopRated() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchTopRatedMovies(){
            const API_KEY = import.meta.env.VITE_APIKEY;
            const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
    
            const response = await axios(URL)
            setMovies(response.data.results)
    
        }

        fetchTopRatedMovies();
    }, [])

    return (
        <div>
            <Hero />
        <h2>Top Rated Movie</h2>
        <Movies movies={movies}/>
        </div>
    )
}

export default TopRated