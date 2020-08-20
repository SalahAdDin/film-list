import React from "react"
import PropTypes from "prop-types"
import { Container, Grid, Typography, makeStyles } from "@material-ui/core"
import { Pagination } from "@material-ui/lab"
import FilmCard from "../elements/filmcard"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}))

const Films = ({
  films,
  currentPage = 1,
  pageCount = 0,
  changePage,
  changeFilmSet,
}) => {
  const classes = useStyles()
  const handlePaginationChange = (event, value) => {
    const newPage = value % 2 === 0 ? Number(value / 2) : Number((value + 1) / 2)
    console.log("====================================")
    console.log(value, currentPage, newPage)
    console.log("====================================")
    if (value % 2 !== 0 && newPage !== currentPage) changePage(newPage)
    else if (value % 2 !== 0 && newPage === currentPage) changeFilmSet(false)
    else if (value % 2 === 0 && newPage !== currentPage) {
      changePage(newPage)
      changeFilmSet(true)
    } else if (value % 2 === 0 && newPage === currentPage) changeFilmSet(true)
    //else if (newPage === currentPage) changeFilmSet(false)
    else changeFilmSet(true)
  }

  return (
    <Container component="section" spacing={2} className={classes.root}>
      {films?.map((film) => (
        <FilmCard key={"movie_" + film.imdbID} {...film} />
      ))}
      <Pagination count={pageCount} onChange={handlePaginationChange} />
    </Container>
  )
}

Films.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
  changePage: PropTypes.func,
  changeFilmSet: PropTypes.func,
}

export default Films
