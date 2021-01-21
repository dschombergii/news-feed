import React, {Component} from 'react'
import axios from 'axios'

import './App.css'

import NewsCard from './components/NewsCard'
import Search from './components/Search'

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

        <Search />

        <div>
          {this.state.articleList.map((article, index) => {
            return(
              <NewsCard 
              key={index}
              title={article.title}
              url={article.url}
              points={article.points}
              author={article.author}
              created_at={article.created_at}/>
            )
          })}
        </div>
        
      </div>
     )
  }
}
 
export default App

