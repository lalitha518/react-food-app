import React from "react";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import Footer from "./components/Footer";
import listOfRestaurant from "./utils/mockData";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [listOfRes, setListOfRes] = useState(listOfRestaurant);
  return (
    <div className="app">
      <Header />
      <div className="body">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filterData = listOfRes.filter((res) => {
                return res.data.avgRating > 4.0;
              });
              setListOfRes(filterData);
              console.log(filterData);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="res-container">
          {listOfRes.map((restaurant) => (
            <RestaurantCard
              key={restaurant.data.id}
              restaurant={restaurant.data}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
