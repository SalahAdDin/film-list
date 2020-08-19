import React from "react"
import PropTypes from "prop-types"
import {
  Card,
  makeStyles,
  CardContent,
  Typography,
  CardMedia,
} from "@material-ui/core"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
}))

const FilmCard = ({ Title, Year, imdbID, Poster }) => {
  const classes = useStyles()
  return (
    <Link to={"/film/" + imdbID} style={{ textDecoration: "none" }}>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent>
            <Typography component="h5" variant="h5">
              {Title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {Year}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={Poster}
          title={"Poster" + Title}
        />
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
