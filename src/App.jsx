import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import CreateMovie from "./pages/movie/Create"
import Popular from "./pages/movie/Popular"
import NowPlaying from "./pages/movie/NowPlaying"
import TopRated from "./pages/movie/TopRated"
import Layout from "./Layout/Index"

function App() {
  
  return (
    <div>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie/create" element={<CreateMovie />}/>
        <Route path="/movie/popular" element={<Popular />}/>
        <Route path="/Movie/now" element={<NowPlaying />}/>
        <Route path="/movie/top" element={<TopRated />} />
      </Routes>

      </Layout>
     
     
    </div>
  )
}

export default App
