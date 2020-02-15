import React, {Component} from 'react'
import axios from 'axios'
import Suggestions from "./Suggestions";

const API_URL = '/api/codes/search';

class App extends Component {
  state = {
    query: '',
    results: []
  };

  getInfo = () => {
    axios.get(`${API_URL}?q=${this.state.query}`)
    .then(({data}) => {
      this.setState({
        results: data
      });
      console.log(data)
    })
  };


  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        this.getInfo()
      } else if (!this.state.query) {
      }
    })
  };

  render() {
    return (
        <form>
          <input
              placeholder="Search for..."
              ref={input => this.search = input}
              onChange={this.handleInputChange}
          />
          <Suggestions results={this.state.results} />
        </form>
    )
  }
}

export default App

