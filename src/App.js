import React, {Component} from 'react'
import axios from 'axios'

import './App.css'

import NewsCard from './components/NewsCard'
import Search from './components/Search'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: [],
    }
  }

  // componentDidMount() {
  //   axios.get(`http://hn.algolia.com/api/v1/search?query=foo&tags=story`)
  //     .then(res => {
  //       const articleList = res.data.hits
  //       this.setState({ articleList })
  //       console.log(articleList)
  //     })
  // }

  searchAll = ({value}) => {
    axios.get(`https://hn.algolia.com/api/v1/search?query=${value}&tags=story`)
      .then(res => {
        const articleList = res.data.hits
        this.setState({ articleList })
        console.log(this.state.articleList)
      })
  }

  // async searchAll({value}) {
  //   const res = await fetch(`http://hn.algolia.com/api/v1/search?query=${value}&tags=story`);
  //   const articleList = await res.data.hits;
  //   this.setState({ articleList })
  // }

  searchAuthor = ({value}) => {
    axios.get(`https://hn.algolia.com/api/v1/search?tags=story,author_${value}`)
      .then(res => {
        const articleList = res.data.hits
        this.setState({ articleList })
        console.log(this.state.articleList)
      })
  }

  searchDate = ({value}) => {
    let startDate = Date.parse(`${value}T00:00:00.000Z`)
    console.log('start date: ', startDate)

    let endDate = Date.parse(`${value}T23:59:59.000Z`)
    console.log('end date: ', endDate)


    axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>${startDate},created_at_i<${endDate}`)
      .then(res => {
        const articleList = res.data.hits
        this.setState({ articleList })
        console.log(this.state.articleList)
      })
  }

  render() { 
    return ( 
      <div style={{background: 'gray'}}>

        <Search searchDate={this.searchDate} searchAuthor={this.searchAuthor} searchAll={this.searchAll} />

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

