import React from "react";
import { Link } from "react-router-dom";

const CardDetails = (props) => {
  const style = props.movieData ? "container" : "container minHeight";
  return (
    <>
      <header>
        <h1>
          <center>Movie Details</center>
        </h1>
      </header>
      <div className={style}>
        <nav className="navbar navbar-inverse navBar">
          <div className="container-fluid">
            <ul className="nav navbar-nav ">
              <li>
                <Link to="/">Back</Link>
              </li>
            </ul>
          </div>
        </nav>
        {props.movieData ? (
          <div className="card mt-5 mb-3">
            <div className="row no-gutters ml-3">
              <div className="col-md-4 mt-4">
                <img
                  className="card-img mb-2"
                  src={`${props.movieData.Poster}`}
                  alt="Card image cap"
                />
                <p className="card-text">Writer: {props.movieData.Writer}</p>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Title: {props.movieData.Title}</h5>
                  <p className="card-text">
                    Released: {props.movieData.Released}
                  </p>
                  <p className="card-text">Actors: {props.movieData.Actors}</p>
                  <p className="card-text">Awards: {props.movieData.Awards}</p>
                  <p className="card-text">
                    BoxOffice: {props.movieData.BoxOffice}
                  </p>
                  <p className="card-text">
                    Country: {props.movieData.Country}
                  </p>
                  <p className="card-text">DVD: {props.movieData.DVD}</p>
                  <p className="card-text">Genre: {props.movieData.Genre}</p>
                  <p className="card-text">
                    Language: {props.movieData.Language}
                  </p>
                  <p className="card-text">
                    Metascore: {props.movieData.Metascore}
                  </p>
                  <p className="card-text">
                    Production: {props.movieData.Production}
                  </p>
                  <p className="card-text">Rated: {props.movieData.Rated}</p>
                  <p className="card-text">
                    Runtime: {props.movieData.Runtime}
                  </p>
                  <p className="card-text">Type: {props.movieData.Type}</p>
                  <p className="card-text">Year: {props.movieData.Year}</p>
                  <p className="card-text">
                    imdbRating: {props.movieData.imdbRating}
                  </p>
                  <p className="card-text">
                    imdbVotes: {props.movieData.imdbVotes}
                  </p>
                  <p className="card-text">Plot: {props.movieData.Plot}</p>
                  {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <center>Movie Details not available</center>
          </div>
        )}
      </div>
    </>
  );
};

export default CardDetails;
