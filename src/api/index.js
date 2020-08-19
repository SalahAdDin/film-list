import axios from "axios"

const apiKey = "8588dfa"

const api = axios.create({ baseURL: `http://www.omdbapi.com/` })

api.interceptors.response.use(
  (response) => response,
  (error) => errorHandler(error)
)

const errorHandler = (error) => {
  if (error.response.status.toString().startsWith("5")) {
    // window.location.href = "/500"
  }

  return Promise.reject({ ...error })
}

export { api, apiKey }
