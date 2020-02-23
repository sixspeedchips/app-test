import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'
import searchService from "../services/searchService";

class Home extends Component {
    state = { list: []};



renderSearchedResults = async render => {
const searchResults = await searchService.compute(render);
console.log(searchResults.data);
this.setState({list:searchResults.data});
};

renderNewResults = (item) => {
    // e.preventDefault();
     this.props.history.push(`/api/codes/search?q=${item}`);
};
  render() {
    return (
        <body>
            <input
            id="input"
            className="form-control form-control-dark w-100"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={() => {
                var input =
                  document.getElementById("input").value != null
                    ? document.getElementById("input").value
                    : "hiv";
                this.renderSearchedResults(input);
            } }
          />

        <ul>{this.state.list.map(item=> <li onClick={ () => this.renderNewResults(item)}>{item}</li>
        ) }</ul>

          {console.log(this.state.list)}
      
        
           </body>
      
    )
  }
}
export default Home;