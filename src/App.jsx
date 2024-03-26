import './App.css'
import Hello from './components/Hello'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  
  return (
    <div>
        <Header />
     <Hello nama="Hasan" major="Informatics"/>
     <Hello nama="Sarah" major="English"/>
     <Hello nama="Budi" major="Engineering"/>
     <Hello nama="Maryam" major="Psychology"/>
     <Hello nama="Jonah" major="Architect"/>
     <Footer />
    </div>
  )
}

export default App
