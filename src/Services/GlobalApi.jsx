import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTMxMWQxMWVjY2ZmM2ExMGRlNDlmNzM1YWVkODBlZSIsInN1YiI6IjY0OGM3MDM5NDJiZjAxMDBhZTMwODVlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.obsyyHrwO4NQyEtMIj2H1WVGU7MOy_-Kmgkwwir1MaM'
  }
};

const getTrendingVideos = axios.request(options)
 
export default {getTrendingVideos}
