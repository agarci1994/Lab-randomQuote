import axios from "axios"

export default class Services {
  constructor() {
      this.axiosApp = axios.create({
          baseURL: `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw`
      })
  }

  getQuote = () => this.axiosApp.get(`/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
  .then(response => response.data)
.catch(err => err)
  }