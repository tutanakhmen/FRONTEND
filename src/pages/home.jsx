import { useEffect, useState } from "react"
import Form from "../components/Form/Form"
import Hero from "../components/Hero/Hero"
import Movies from "../components/Movies/Movies"
import axios from "axios"



function Home() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchUpcomingMovies(){
            const API_KEY = import.meta.env.VITE_APIKEY;
            const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
    
            const response = await axios(URL)
            setMovies(response.data.results)
    
        }

        fetchUpcomingMovies();
    }, [])
    return (
        <div>
            <Hero />
            <Movies movies={movies} />
            <Form movies={movies} setMovies={setMovies}/>
        </div>
    )

    // return (
    //     <Counter />
    // )

}

export default Home