import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import moment from "moment"
import { useHistory } from "react-router"
import {
  Container,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Box,
} from "@material-ui/core"
import { ArrowBack } from "@material-ui/icons"
import { Rating, Skeleton } from "@material-ui/lab"
import { getFilm } from "src/api/films"

import "./film.scss"

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
  let history = useHistory()

  return (
    <Container
      component="section"
      spacing={2}
      style={{ marginTop: 60, marginBottom: 60 }}
    >
      <Card className="film">
        <div>
          {Poster ? (
            <CardMedia component="img" image={Poster} title={"Poster: " + Title} />
          ) : (
            <Skeleton variant="rect" width="100%">
              <div style={{ paddingTop: "57%" }} />
            </Skeleton>
          )}
        </div>
        <div className="right">
          <CardHeader
            title={
              <>
                {Title}
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="textSecondary"
                >
                  ({Year})
                </Typography>
              </>
            }
            subheader={
              <>
                {Runtime} | {Genre} |{" "}
                {moment(Released, "DD MMMM YYYY").format("DD MMMM YYYY")} ({Country})
                | {Rated} |{" "}
                <Rating
                  defaultValue={5.0}
                  value={Number(imdbRating)}
                  precision={0.1}
                  max={10}
                  readOnly
                />
              </>
            }
          />
          <CardContent>
            <Typography component="p" variant="body1" paragraph>
              {Plot}
            </Typography>
          </CardContent>
          <CardActions>
            <Box>
              <Typography component="p" variant="body2">
                <strong>Director:</strong> {Director}
              </Typography>
              <Typography component="p" variant="body2">
                <strong>Writer:</strong> {Writer}
              </Typography>
              <Typography component="p" variant="body2">
                <strong>Actor:</strong> {Actors}
              </Typography>
            </Box>
            <IconButton onClick={() => history.goBack()} aria-label="show more">
              <ArrowBack />
            </IconButton>
          </CardActions>
        </div>
      </Card>
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
