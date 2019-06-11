import axios from 'axios'

const hackernewsAPI = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/'
})

export { hackernewsAPI }
