import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Favourite from "./Favourite";
import "./App.css";
import CardDetails from "./CardDetails";

function App() {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchId, setSearchId] = useState("tt3896198");
  const [searchType, setSearchType] = useState("all");

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home
              movieData={movieData}
              setMovieData={setMovieData}
              loading={loading}
              setLoading={setLoading}
              searchId={searchId}
              searchType={searchType}
              setSearchId={setSearchId}
              setSearchType={setSearchType}
            />
          </Route>
          <Route path="/favourite">
            <Favourite movieData={movieData} setMovieData={setMovieData} />
          </Route>
          <Route path={`/banks/:id`}>
            <CardDetails movieData={movieData} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
