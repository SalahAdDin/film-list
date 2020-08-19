import React from "react"
import PropTypes from "prop-types"
import { Container, Grid, Typography, makeStyles } from "@material-ui/core"
import FilmCard from "../elements/filmcard"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}))

const Films = ({ films }) => {
  const classes = useStyles()
  return (
    <Container component="section" spacing={2} className={classes.root}>
      {films?.map((film) => (
        <FilmCard key={"movie_" + film.imdbID} {...film} />
      ))}
    </Container>
  )
}

Films.propTypes = { films: PropTypes.arrayOf(PropTypes.object) }

export default Films
