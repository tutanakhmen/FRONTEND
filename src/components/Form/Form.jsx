import { useState } from "react"
import styles from "./Form.module.css"
import { nanoid } from "nanoid"
import Alert from "../Alert/Alert"
function Form(props) {

    const {movies, setMovies} = props
    
    // membuat state title
    const [title, setTittle] = useState("")

    // membuat state date
    const [date, setDate] = useState("")

    // membuat state title dan date error
    const [isTitleEmpty, setIsTitleEmpty] = useState(false)
    const [isDateEmpty, setIsDateEmpty] = useState(false)

    // membuat function
    function handleTittle(e) {
        setTittle(e.target.value)
    }

     //membuat function
     function handleDate(e){
        setDate(e.target.value)
    } 

    // handle form ketika disubmit
    function handleSubmit(e){
        // mencegah perilaku default direfresh
        e.preventDefault()

        // set button tidak bisa disubmit apabila data kosng
        if(title === ""){
            setIsTitleEmpty(true)
        }else if (date === ""){
            setIsTitleEmpty(false)
            setIsDateEmpty(true)
        }
        else {
            
        // data yang ingin ditambahkan
        const movie ={
            id: nanoid(),
            title: title,
            year: date,
            type: "movie",
            poster: "https://picsum.photos/300/400",
        }

        setMovies([...movies, movie])
        setIsDateEmpty(false)
        setIsTitleEmpty(false)
        }

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
                        <input onChange={handleTittle} id="title" className={styles.form__input} type="text" name="title" value={title}/>
                        {isTitleEmpty && <Alert>Title Wajib diisi</Alert>}
                        </div>

                    <div className={styles.form__group}>
                            <label htmlFor="year" className={styles.form__label}>year</label>
                            <input onChange={handleDate} id="year"className={styles.form__input} type="number" name="year" value={date}/>
                            {isDateEmpty && <Alert>Date wajib diisi</Alert>}      
                    </div>

                    <div className={styles.form__group}>
                            <label htmlFor="Poster" className={styles.form__label}>Poster</label>
                            <input id="Poster"className={styles.form__input} type="text" name="poster"/>                            
                    </div>

                    <div className={styles.form__group}>
                            <select name="Genre" id="Genre" className={styles.form__label}>
                                <option value="horror">Horror</option>
                                <option value="Drama">Drama</option>
                                <option value="Action">Action</option>
                                <option value="Cartoon">Cartoon</option>
                            </select>
                                                        
                    </div>
                        <button className={styles.form__button}>Submit</button>
                </form>
            </div>
           </section>
        </div>
    )
}

export default Form