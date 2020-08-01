import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Form from "./From";
// import './Home.css';

const Home = (props) => {
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${props.searchId}&type=${props.searchType}&apikey=c1814bae`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        response.fav = "favourite";
        sessionStorage.setItem("data", JSON.stringify(response));
        props.setMovieData(JSON.parse(sessionStorage.getItem("data")));
        props.setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [props.searchId]);

//   console.log(props.movieData);
  const handleSearch = (value1,value2) => {
    if(value1 === "") {
        props.setSearchId("tt3896198");
        props.setSearchType("all");
    }  else{
        props.setSearchId(value1);
        props.setSearchType(value2);
    }
  };
  const style =
    props.movieData && props.movieData.Response === "True"
      ? "container"
      : "container minHeight";
  return (
    <div>
      <header>
        <h1>
          <center>Movie Search Application</center>
        </h1>
      </header>
      <div className={style}>
        <nav className="navbar navbar-inverse navBar">
          <div className="container-fluid">
            <ul className="nav navbar-nav ">
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/favourite"> Favourite</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Form handleSearch={handleSearch} />
        {props.loading ? (
          <div>...loading</div>
        ) : props.movieData.Response === "True" ? (
          <Card cardData={props.movieData} setMovieData={props.setMovieData} />
        ) : (
          <div>
            <center>No data found</center>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
