import axios from 'axios'

const resource = axios.create({
  baseURL: 'https://api.tvmaze.com'
})

export async function getAllShows() {
  const response = await resource.get('/shows')

  return response.data
}

export async function getShowDetails(id: string) {
  const response = await resource.get('/shows/' + id)

  return response.data
}

export async function searchShows(q: string) {
  const response = await resource.get('/search/shows', {
    params: {
      q,
    }
  })

  return response.data
}