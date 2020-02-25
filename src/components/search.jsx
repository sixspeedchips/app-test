import searchService from "../services/searchService";
import Table from "../common/table";
import SimpleCard from "./SimpleCards/SimpleCard";
import React, { Component, Fragment } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import queryString from "query-string";

let page=0;

class Search extends Component {
  state = { search: "Search", data: [], list: []};
  columns = [
    {
      path: "code",
      label: "code"
    },
    { path: "diagnosis", label: "diagnosis" },
    { path: "inclusionTerms", label: "inclusionTerms" }
  ];

  async componentDidMount() {
    page=0;
    console.log(window.location.search);
    const input = queryString.parse(window.location.search);
    console.log(input);
    const data = await searchService.search(input.q,page);
    this.setState({data:data.data, search:input.q});

  }
  

  renderSearchedResults = async (render) => {
    const searchResults = await searchService.compute(render);
    console.log(searchResults.data);
    this.setState({list:searchResults.data,search:render, data:[]});
    };

renderNewSearched = async (input,e) => {
  page=0;  
  e.preventDefault();
  window.location.search=`?q=${input}`;
  const data = await searchService.search(input,page);
  this.setState({
     data: data.data, search:input});

};
// renderNewResults = async (input,e) => {
//   page=0;  
//   e.preventDefault();
//   window.location.search=`?q=${input}`;
//   const data = await searchService.search(input,page);
//   this.setState({
//      data: data.data, search:input});

// }
  renderSearched = async (input) => {
    page++;
    const data = await searchService.search(input,page);
    this.setState({
       data: this.state.data.concat(data.data) });
  
  };


  render() {
    return (
      <body>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">
            lib.io
          </a>
          <input
            id="input"
            className="form-control form-control-dark w-100"
            type="text"
            placeholder="Search"
            value={this.state.search}
            aria-label="Search"
            onKeyDown={e => {
              if (e.key === "Enter") {
                var input =
                  document.getElementById("input").value != null
                    ? document.getElementById("input").value
                    : "hiv";

                this.renderNewSearched(input,e);
                // window.location.search=`?q=${input}`;
                // this.setState({Search: input });
              }
            }}
            onChange={() => {
              var input =
                  document.getElementById("input").value != null
                    ? document.getElementById("input").value
                    : "hiv";
                 this.renderSearchedResults(input);

            }}
          />

          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  var input =
                    document.getElementById("input").value != null
                      ? document.getElementById("input").value
                      : "hiv";
                      this.renderNewSearched(input,e);
                }}
              >
                Search
              </button>
            </li>
          </ul>
        </nav>
       
        <ul>{this.state.list.map(item=> <li onClick={ (e) => this.renderNewSearched(item,e)}>{item}</li>
        ) }</ul>
        
        <InfiniteScroll
          dataLength={this.state.data.length}
          next={ () => {
            var input =
                    document.getElementById("input").value != null
                      ? document.getElementById("input").value
                      : "hiv";
  
                  this.renderSearched(input);
                }}
          hasMore={true}
        >
           {this.state.data && (
          <SimpleCard columns={this.columns} data={this.state.data} />
        )}
        </InfiniteScroll>
      </body>

    );
  }
}

export default Search;
