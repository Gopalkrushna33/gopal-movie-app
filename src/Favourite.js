import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
// import './Favourite.css';

const Favourite = (props) => {
  const favData = JSON.parse(sessionStorage.getItem("data"));
  const style =
    favData && favData.fav === "unfavourite"
      ? "container"
      : "container minHeight";

  console.log(favData);
  return (
    <>
      <header>
        <h1>
          <center>My Favourites</center>
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
        {favData && favData.fav === "unfavourite" ? (
          <Card cardData={favData} setMovieData={props.setMovieData} />
        ) : (
          <div>
            <center>No Favourites available</center>
          </div>
        )}
      </div>
    </>
  );
};

export default Favourite;
