import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import Search from "./components/search";
import searchService from "./services/searchService";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <main className="Main">
        {/* <NavBar /> */}
        <BrowserRouter>
          <Switch>
            {/* <Route path="/search" component={console.log("In Progress")} /> */}
            <Route path="/home" component={Search} />
            <Redirect from="/" exact to="/home" />
          </Switch>
        </BrowserRouter>
      </main>
    </React.Fragment>
  );
}

export default App;
