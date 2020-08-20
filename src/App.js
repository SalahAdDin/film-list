import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Route, Switch } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { makeStyles } from "@material-ui/core"

import "./App.css"
import { getSearchedFilms } from "./api/films"
import Films from "./components/views/films"
import Movie from "./components/views/film"
import Header from "./components/elements/header"

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

  useEffect(() => {
    fetchData()
  }, [term])

  return (
    <BrowserRouter>
      <Header onSubmit={(term) => setTerm(term)} />
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
  match: PropTypes.object,
}

export default App
