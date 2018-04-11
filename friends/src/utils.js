import { get, post } from "axios"

const makeFetch = pathBase => async pathEnd =>
  await get(`${pathBase}${pathEnd}`).then(data => data)

const makePost = pathBase => async pathEnd =>
  await post(`${pathBase}${pathEnd}`)

export { makeFetch, makePost }
