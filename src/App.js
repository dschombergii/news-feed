import React, {Component} from 'react'
import './App.css';
import NewsCard from './components/NewsCard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <NewsCard/>
      </div>
     )
  }
}
 
export default App

