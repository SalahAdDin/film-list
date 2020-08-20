import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Route, Switch } from "react-router"
import { BrowserRouter } from "react-router-dom"

import "./App.css"
import { getSearchedFilms } from "./api/films"
import Films from "./components/views/films"
import Movie from "./components/views/film"
import Header from "./components/elements/header"

const App = () => {
  const [films, setFilms] = useState({})
  const [page, setPage] = useState(1)
  const [term, setTerm] = useState("Pokemon")
  const [totalResults, setTotalResults] = useState(0)

  const fetchData = async () => {
    const result = await getSearchedFilms(term, page)
    const fetchedData = result.data.Search.sort(
      (a, b) => Number(b.Year) - Number(a.Year)
    )
    setFilms({ 1: fetchedData.slice(0, 5), 2: fetchedData.slice(5, 10) })
    setTotalResults(result.data.totalResults)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchData()
  }, [term])

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <BrowserRouter>
      <Header onSubmit={(term) => setTerm(term)} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Films
              films={films}
              currentPage={page}
              pageCount={Number((totalResults / 5).toFixed())}
              changePage={(page) => setPage(page)}
            />
          )}
        />
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
