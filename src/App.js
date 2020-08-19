import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Route, Switch } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { Container, Grid, Typography, makeStyles } from "@material-ui/core"

import logo from "./logo.svg"
import "./App.css"
import { getSearchedFilms } from "./api/films"
import Films from "./components/views/films"
import Movie from "./components/views/film"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  landing: {
    width: "auto",
    margin: theme.spacing(4),
  },
}))

const App = () => {
  const classes = useStyles()
  const [term, setTerm] = useState("Pokemon")
  const [page, setPage] = useState(1)
  const [films, setFilms] = useState([])

  const fetchData = async () => {
    const result = await getSearchedFilms(term, page)
    setFilms(result.data.Search)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Films films={films} />} />
        <Route
          exact
          path="/film/:id"
          render={(props) => <Movie {...props.match.params} />}
        />
      </Switch>
    </BrowserRouter>
  )
}

App.propTypes = {
  match: PropTypes.object.isRequired,
}

export default App
