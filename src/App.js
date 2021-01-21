import React, {Component} from 'react'
<<<<<<< HEAD
import axios from 'axios'

import './App.css'

import NewsCard from './components/NewsCard'
import SearchBar from './components/SearchBar'
=======
import './App.css';
import NewsCard from './components/NewsCard'
>>>>>>> 3756507209331673aee540d9c0bcba5a83346371

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      articleList: []
     }
  }

  componentDidMount() {
    axios.get(`http://hn.algolia.com/api/v1/search?query=foo&tags=story`)
      .then(res => {
        const articleList = res.data.hits
        this.setState({ articleList })
        console.log(articleList)
      })
  }

  searchAll = () => {
    axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.value}&tags=story`)
      .then(res => {
        const articleList = res.data.hits
        this.setState({ articleList })
        console.log(articleList)
      })
  }

  searchAuthor = () => {
    axios.get(`http://hn.algolia.com/api/v1/search?tags=story,author_${this.state.value}`)
      .then(res => {
        const articleList = res.data.hits
        this.setState({ articleList })
        console.log(articleList)
      })
  }

  searchDate = () => {
    let startDate = Date.parse()

    let endDate = Date.parse()

    axios.get(`http://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>${startDate},created_at_i<${endDate}`)
      .then(res => {
        const articleList = res.data.hits
        this.setState({ articleList })
        console.log(articleList)
      })
  }

  render() { 
    return ( 
      <div>
<<<<<<< HEAD

        <div>
          <SearchBar />
        </div>

        <div>
          {this.state.articleList.map((article, id) => {
            return(
              <NewsCard />
            )
          })}
        </div>
        
=======
        <NewsCard/>
>>>>>>> 3756507209331673aee540d9c0bcba5a83346371
      </div>
     )
  }
}
 
export default App

