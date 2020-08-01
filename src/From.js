import React, { useState } from "react";
// import './App.css';

const Form = ({ handleSearch }) => {
  const [inputData, setInputData] = useState("");
  const [selectData, setSelectData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputData,selectData);
  };

  return (
    <>
      <form
        className="form-inline d-flex justify-content-center mt-5"
        onSubmit={handleSubmit}
      >
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            id="serch"
            value={inputData}
            placeholder="Search"
            onChange={(e) => {
              setInputData(e.target.value);
            }}
          />
        </div>
        <div className="form-group mr-3 mb-2">
          <select className="form-control" id="exampleFormControlSelect1" onChange={e => setSelectData(e.currentTarget.value)}>
            <option>All</option>
            <option>Movies</option>
            <option>Series</option>
            <option>Episodes</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Search
        </button>
      </form>
    </>
  );
};

export default Form;
