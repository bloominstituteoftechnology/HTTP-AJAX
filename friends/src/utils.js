import { get, post } from "axios"

const makeFetch = pathBase => async pathEnd =>
  await get(`${pathBase}${pathEnd}`).then(data => data)

const makePost = pathBase => async (pathEnd, body) =>
  await post(`${pathBase}${pathEnd}`, body)

export { makeFetch, makePost }
