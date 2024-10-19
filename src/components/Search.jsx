import React from "react";
import listOfRestaurant from "../utils/mockData";


const Search = () => {
  return (
    <div className="filter">
      <button
        className="filter-btn"
        onClick={() => {
          const filterData= listOfRestaurant.filter((res)=>{
           return res.data.avgRating >4.0 
           })
           console.log(filterData);
        }}
      >
        Top Rated Restaurant
      </button>
    </div>
  );
};

export default Search;
