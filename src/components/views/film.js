import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import moment from "moment"
import {
  Container,
  makeStyles,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Box,
} from "@material-ui/core"
import Rating from "@material-ui/lab/Rating"
import { ArrowBack } from "@material-ui/icons"
import { getFilm } from "src/api/films"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}))

const Film = ({
  Title,
  Year,
  Released,
  Rated,
  Runtime,
  Genre,
  Director,
  Writer,
  Actors,
  Plot,
  Poster,
  Country,
  imdbRating,
}) => {
  const classes = useStyles()
  const handleBackClick = () => {}

  return (
    <Container component="section" spacing={2} className={classes.root}>
      <Card>
        <CardHeader
          title={
            <>
              {Title}
              <Typography component="span" variant="subtitle1" color="textSecondary">
                ({Year})
              </Typography>
            </>
          }
          subheader={
            <>
              {Runtime} | {Genre} | {moment(Released).format("DD MMMM YYYY")} (
              {Country}) | {Rated} |{" "}
              <Rating value={Number(imdbRating)} precision={0.1} max={10} readOnly />
            </>
          }
        />
        <CardMedia image={Poster} title={"Poster: " + Title} />
        <CardContent>
          <Typography component="p" variant="body" paragraph>
            {Plot}
          </Typography>
        </CardContent>
        <CardActions>
          <Box>
            <Typography component="p" variant="body">
              <em>Director:</em> {Director}
            </Typography>
            <Typography component="p" variant="body">
              <em>Writer:</em> {Writer}
            </Typography>
            <Typography component="p" variant="body">
              <em>Actor:</em> {Actors}
            </Typography>
          </Box>
          <IconButton
            onClick={handleBackClick}
            // aria-expanded={expanded}
            aria-label="show more"
          >
            <ArrowBack />
          </IconButton>
        </CardActions>
      </Card>
      <footer></footer>
    </Container>
  )
}

Film.propTypes = {
  Title: PropTypes.string,
  Year: PropTypes.string,
  Released: PropTypes.string,
  Rated: PropTypes.string,
  Runtime: PropTypes.string,
  Genre: PropTypes.string,
  Director: PropTypes.string,
  Writer: PropTypes.string,
  Actors: PropTypes.string,
  Plot: PropTypes.string,
  Country: PropTypes.string,
  Poster: PropTypes.string,
  imdbRating: PropTypes.string,
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
