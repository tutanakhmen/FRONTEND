import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero"
import Movies from "../../components/Movies/Movies";
import axios from "axios";

function NowPlaying() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchNowPlayingMovies(){
            const API_KEY = import.meta.env.VITE_APIKEY;
            const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
    
            const response = await axios(URL)
            setMovies(response.data.results)
    
        }

        fetchNowPlayingMovies();
    }, [])
    return (
        <div>
        <Hero />
        <h2>Now Playing</h2>
        <Movies movies={movies}/>
        </div>
    )
}

export default NowPlaying