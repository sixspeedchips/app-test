import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import Search from "./components/search";
import searchService from "./services/searchService";
import Terms from "./components/Terms/Term";
import Home from "./components/Home";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <main className="Main">
        {/* <NavBar /> */}
        <BrowserRouter>
          <Switch>
            {/* <Route path="/search" component={console.log("In Progress")} /> */}
            <Route path="/home" component={Home}/>
            <Route path="/api/codes/" component={Search} />
            <Route path="/terms-conditions" component={Terms}/>
            <Redirect from="/" exact to="/home" />
          </Switch>
        </BrowserRouter>
      </main>
    </React.Fragment>
  );
}

export default App;
