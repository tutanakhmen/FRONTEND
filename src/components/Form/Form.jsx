import { useState } from "react";
import styles from "./Form.module.css";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";
import Button from "../Ui/Button";

function Form(props) {
  const { movies, setMovies } = props;

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    genre: "horror", // Added default genre
  });

  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isDateEmpty, setIsDateEmpty] = useState(false);
  const [isPosterEmpty, setIsPosterEmpty] = useState(false);

  const { title, date, poster, genre } = formData;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    if (title.trim() === "") {
      setIsTitleEmpty(true);
      setIsDateEmpty(false);
      setIsPosterEmpty(false);
      return false;
    } else if (date.trim() === "") {
      setIsTitleEmpty(false);
      setIsDateEmpty(true);
      setIsPosterEmpty(false);
      return false;
    } else if (poster.trim() === "") {
      setIsTitleEmpty(false);
      setIsDateEmpty(false);
      setIsPosterEmpty(true);
      return false;
    } else {
      setIsTitleEmpty(false);
      setIsDateEmpty(false);
      setIsPosterEmpty(false);
      return true;
    }
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: "movie",
      poster: poster || "https://picsum.photos/300/400", // Added default poster if not provided
      genre: genre,
    };

    setMovies([...movies, movie]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      addMovie();
      setFormData({
        title: "",
        date: "",
        poster: "",
        genre: "horror", // Reset form after successful submission
      });
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__img}
            src="https://picsum.photos/600/400"
            alt=""
          />
        </div>

        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie</h2>
          <form onSubmit={handleSubmit} action="title">
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                onChange={handleChange}
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                value={title}
              />
              {isTitleEmpty && <Alert>Title Wajib diisi</Alert>}
            </div>

            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Year
              </label>
              <input
                onChange={handleChange}
                id="date"
                className={styles.form__input}
                type="text"
                name="date"
                value={date}
              />
              {isDateEmpty && <Alert>Date wajib diisi</Alert>}
            </div>

            <div className={styles.form__group}>
              <label htmlFor="poster" className={styles.form__label}>
                Poster
              </label>
              <input
                onChange={handleChange}
                id="poster"
                className={styles.form__input}
                type="text"
                name="poster"
                value={poster}
              />
              {isPosterEmpty && <Alert>Poster Wajib diisi</Alert>}
            </div>

            <div className={styles.form__group}>
              <label htmlFor="genre" className={styles.form__label}>
                Genre
              </label>
              <select
                onChange={handleChange}
                id="genre"
                className={styles.form__input}
                name="genre"
                value={genre}
              >
                <option value="horror">Horror</option>
                <option value="Drama">Drama</option>
                <option value="Action">Action</option>
                <option value="Cartoon">Cartoon</option>
              </select>
            </div>

            <Button variant="secondary" full type="submit">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;
