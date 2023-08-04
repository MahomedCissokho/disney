import axios from 'axios'

const movieBaseUrl = 'https://api.themoviedb.org/3'
const api_key      = '5a311d11eccff3a10de49f735aed80ee'

export const getTrendingVideos = axios.get(movieBaseUrl+'/trending/all/day?api_key'+api_key)

