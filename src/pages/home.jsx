import { useState } from "react"
import Form from "../components/Form/Form"
import Hero from "../components/Hero/Hero"
import Movies from "../components/Movies/Movies"
import data from "../utils/constant/data"



function Home() {
    const [movies, setMovies] =  useState(data)
    return (
        <div>
            <Hero />
            <Movies movies={movies} setMovies={setMovies} />
            <Form movies={movies} setMovies={setMovies}/>
        </div>
    )

    // return (
    //     <Counter />
    // )

}

export default Home