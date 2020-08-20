import React from "react"
import PropTypes from "prop-types"
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"

import "./filmcard.scss"

const FilmCard = ({ Title, Year, imdbID, Poster }) => {
  return (
    <Link to={"/film/" + imdbID} style={{ textDecoration: "none" }}>
      <Card className="film-card" elevation={0}>
        <CardContent>
          <Typography component="h5" variant="h5">
            {Title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {Year}
          </Typography>
        </CardContent>
        <CardMedia className="poster" image={Poster} title={"Poster" + Title} />
      </Card>
    </Link>
  )
}

FilmCard.propTypes = {
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
}

export default FilmCard
