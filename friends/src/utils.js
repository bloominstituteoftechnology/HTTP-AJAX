import { get } from "axios"

const makeFetch = pathBase => async pathEnd =>
  await get(`${pathBase}${pathEnd}`).then(data => data)

export { makeFetch }
