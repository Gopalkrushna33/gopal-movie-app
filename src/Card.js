import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import './App.css';

const Card = (props) => {
  let history = useHistory();
  const [fav, setFav] = useState("favourite");
  const handleFav = () => {
    const newMovieData = { ...props.cardData };
    if (newMovieData.fav === "favourite") {
      setFav("unfavourite");
      newMovieData.fav = "unfavourite";
    } else {
      setFav("favourite");
      newMovieData.fav = "favourite";
    }
    sessionStorage.setItem("data", JSON.stringify(newMovieData));
    props.setMovieData(newMovieData);
  };
  const handleClick = (id) => {
    history.push(`/banks/:${id}`);
  };
  return (
    <>
      <div className="card mt-5 mb-5" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={`${props.cardData.Poster}`}
          alt="Card image cap"
          onClick={() => {
            handleClick(props.cardData.imdbID);
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.cardData.Title}</h5>
          <p className="card-text">{props.cardData.Released}</p>
          <button className="btn btn-primary" onClick={handleFav}>
            {props.cardData.fav}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
