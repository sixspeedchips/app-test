import searchService from "../services/searchService";
import Table from "../common/table";
import SimpleCard from "./SimpleCards/SimpleCard";
import React, { Component, Fragment } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import queryString from "query-string";

let page=0;

class Search extends Component {
  state = { search: "Search", data: [] };
  columns = [
    {
      path: "code",
      label: "code"
    },
    { path: "diagnosis", label: "diagnosis" },
    { path: "inclusionTerms", label: "inclusionTerms" }
  ];

  async componentDidMount() {
    const input = queryString.parse(window.location.search);
    console.log(input);
    const data = await searchService.search(input.q,page);
    this.setState({data:data.data, search:input.q});

  }

renderNewSearched = async input => {
  
  const data = await searchService.search(input,page);
  this.setState({
     data: data.data, search:input});

}


  renderSearched = async input => {

    // console.log(input);
    const data = await searchService.search(input,page);
    // console.log(data);
    // console.log("Data obtained ",data.data);
    // console.log("Page=",page);
    this.setState({
       data: this.state.data.concat(data.data) });
       page++;
  
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
            value={this.state.input}
            aria-label="Search"
            onKeyDown={e => {
              if (e.key === "Enter") {
                var input =
                  document.getElementById("input").value != null
                    ? document.getElementById("input").value
                    : "hiv";
                this.renderNewSearched(input);
              }
            }}
            onChange={() => {
              var input =
                  document.getElementById("input").value != null
                    ? document.getElementById("input").value
                    : "hiv";
                this.renderNewSearched(input);
            }}
          />

          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <button
                className="btn btn-primary"
                onClick={() => {
                  var input =
                    document.getElementById("input").value != null
                      ? document.getElementById("input").value
                      : "hiv";
                  this.renderSearched(input);
                }}
              >
                Search
              </button>
            </li>
          </ul>
        </nav>
       
       
        
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
