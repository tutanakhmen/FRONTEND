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
            setMovies(response.data.results)
    
        }

        fetchPopularMovies();
    }, [])



    return (
        <div>
            <Hero />
            
        <h2>Popular Movie</h2>
        <Movies movies={movies}/>

        </div>
    )
}

export default Popular