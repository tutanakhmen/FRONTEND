import { useState } from "react"
import styles from "./Form.module.css"
import { nanoid } from "nanoid"
import Alert from "../Alert/Alert"
import Button from "../Ui/Button"
function Form(props) {

    const {movies, setMovies} = props

    const [formData, setFormData] = useState({
        title: "",
        date: "",
        poster: "",
        type: "",
    })

    function handleChange(e) {
        const { name, value} = e.target

        setFormData({
            ...formData,
            [name]: value,
        })
    }
    


    // membuat state title dan date error   
    const [isTitleEmpty, setIsTitleEmpty] = useState(false)
    const [isDateEmpty, setIsDateEmpty] = useState(false)
    const [isPosterEmpty, setIsPosterEmpty] = useState(false)

    const {title, date, poster, } = formData

    function validate() {
        if(title === ""){
            setIsTitleEmpty(true)
            return false
        }else if (date === ""){
            setIsTitleEmpty(false)
            setIsDateEmpty(true)
            return false
        }
        else if (poster === ""){
           setIsTitleEmpty(false)
           setIsDateEmpty(false)
           setIsPosterEmpty(true)
           return false
        }
        else {
            setIsDateEmpty(false)
            setIsTitleEmpty(false)
            setIsPosterEmpty(false)
            return true

        }

    }

    function addMovie() {
                   const movie ={
                id: nanoid(),
                title: title,
                year: date,
                type: "movie",
                poster: "https://picsum.photos/300/400",
            }

    
    
            setMovies([...movies, movie])
    
    }

    // handle form ketika disubmit
    function handleSubmit(e){
        // mencegah perilaku default direfresh
        e.preventDefault()

        validate() && addMovie()

    }

    return (
        <div className={styles.container}>
           <section className={styles.form}>
            <div className={styles.form__left}>
                <img className={styles.form__img} src="https://picsum.photos/600/400" alt="" />
            </div>

            <div className={styles.form__right}>
                <h2 className={styles.form__title}>Add Movie</h2>
                <form onSubmit={handleSubmit} action="title">
                    <div className={styles.form__group}>
                        <label htmlFor="" className={styles.form__label}>Title</label>
                        <input onChange={handleChange} id="title" className={styles.form__input} type="text" name="title" value={title}/>
                        {isTitleEmpty && <Alert>Title Wajib diisi</Alert>}
                        </div>

                    <div className={styles.form__group}>
                            <label htmlFor="year" className={styles.form__label}>year</label>
                            <input onChange={handleChange} id="Year"className={styles.form__input} type="text" name="date" value={date}/>
                            {isDateEmpty && <Alert>Date wajib diisi</Alert>}      
                    </div>

                    <div className={styles.form__group}>
                            <label htmlFor="Poster" className={styles.form__label}>Poster</label>
                            <input onChange={handleChange} id="Poster"className={styles.form__input} type="text" name="poster"/>    
                            {isPosterEmpty && <Alert>Poster Wajib diisi</Alert>}                        
                    </div>

                    <div className={styles.form__group}>
                            <select name="Genre" id="Genre" className={styles.form__label}>
                                <option value="horror">Horror</option>
                                <option value="Drama">Drama</option>
                                <option value="Action">Action</option>
                                <option value="Cartoon">Cartoon</option>
                            </select>
                                                        
                    </div>
                        <Button variant="secondary" full>Submit</Button>
                </form>
            </div>
           </section>
        </div>
    )
}

export default Form