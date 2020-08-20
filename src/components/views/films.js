import React, { useState } from "react"
import PropTypes from "prop-types"
import { Container, Typography, makeStyles } from "@material-ui/core"
import { Pagination } from "@material-ui/lab"
import FilmCard from "../elements/filmcard"

import "./films.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}))

const Films = ({ films, currentPage = 1, pageCount = 0, changePage, term }) => {
  const classes = useStyles()
  const [half, setHalf] = useState(1)

  const handlePaginationChange = (event, value) => {
    const newPage = value % 2 === 0 ? Number(value / 2) : Number((value + 1) / 2)

    if (value % 2 === 0 && newPage === currentPage) setHalf(2)
    else if (value % 2 === 0 && newPage !== currentPage) {
      changePage(newPage)
      setHalf(2)
    } else if (value % 2 !== 0) {
      changePage(newPage)
      setHalf(1)
    }
  }

  return (
    <Container component="section" spacing={2} className={classes.root + " films"}>
      <Typography component="h6" variant="h6" gutterBottom>
        Results for {term}
      </Typography>
      {films[half]?.map((film) => (
        <FilmCard key={"movie_" + film.imdbID} {...film} />
      ))}
      <Pagination
        count={pageCount}
        onChange={handlePaginationChange}
        className="pagination"
      />
    </Container>
  )
}

Films.propTypes = {
  films: PropTypes.objectOf(PropTypes.array),
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
  changePage: PropTypes.func,
  term: PropTypes.string,
}

export default Films
