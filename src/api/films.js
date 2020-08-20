import { api, apiKey } from "./index"

export const getFilm = (id) => {
  return api.get(`?apikey=${apiKey}&i=${id}`)
}

export const getSearchedFilms = (text, page) => {
  return api.get(`?apikey=${apiKey}&type=movie&s=${text}&page=${page}`)
}
