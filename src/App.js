import React from 'react';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Recommend from "./components/Recommend/Recommend";
import SearchPage from "./components/SearchPage/SearchPage";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="app">
      {/* Router determine what url loads what component */}
      <Router>
        <Header/>

          <Switch>

            <Route path="/search/:searchTerm">
              <div className="appPage">
                <Sidebar />
                <SearchPage />
              </div>
            </Route>

            <Route path="/">
              <div className="appPage">
                <Sidebar />
                <Recommend />
              </div>
            </Route>

          </Switch>
      </Router>

      {/*
      */}

    </div>
  );
}

export default App;
