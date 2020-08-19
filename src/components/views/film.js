import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { getFilm } from "src/api/films"

const Film = ({
  Title,
  Released,
  Rated,
  Runtime,
  Genre,
  Director,
  Writer,
  Actors,
  Plot,
  Language,
  Country,
  Awards,
  Poster,
  Metascore,
  Production,
}) => {
  return <div></div>
}

Film.propTypes = {
  Title: PropTypes.string,
  Released: PropTypes.string,
  Rated: PropTypes.string,
  Runtime: PropTypes.string,
  Genre: PropTypes.string,
  Director: PropTypes.string,
  Writer: PropTypes.string,
  Actors: PropTypes.string,
  Plot: PropTypes.string,
  Language: PropTypes.string,
  Country: PropTypes.string,
  Awards: PropTypes.string,
  Poster: PropTypes.string,
  Metascore: PropTypes.string,
  Production: PropTypes.string,
}

const Movie = ({ id }) => {
  const [film, setFilm] = useState({})

  const fetchData = async () => {
    const result = await getFilm(id)
    setFilm(result.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <Film {...film} />
}

Movie.propTypes = { id: PropTypes.string.isRequired }

export default Movie
