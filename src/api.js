import axios from 'axios'

const hackernewsAPI = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/'
})

const githubAPI = axios.create({
  baseURL: 'https://api.github.com'
})

export { hackernewsAPI, githubAPI }
