import { get, post } from 'axios'

const makeFetch = pathBase => async pathEnd => get(`${pathBase}${pathEnd}`)

const makePost = pathBase => async (pathEnd, body) =>
  post(`${pathBase}${pathEnd}`, body)

export { makeFetch, makePost }
