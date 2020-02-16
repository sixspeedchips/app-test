import React, { Component } from "react";
import searchService from "../services/searchService";
import axios from "axios";

class Search extends Component {
  state = { search: "hiv", data: [] };

  renderSearched = async input => {
    console.log(input);

    const { data } = await searchService.search(input);
    console.log(data);
    console.log(input);
    this.setState({ data });
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
            aria-label="Search"
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
        <ul>
          {this.state.data.map(s => (
            <p>
              {s.code + " "}
              {s.diagnosis}
            </p>
          ))}
        </ul>
      </body>
    );
  }
}

export default Search;
