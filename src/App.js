import React from 'react';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import Search from './components/Search';
import Footer from './components/Footer';
import listOfRestaurant from './utils/mockData';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <Search />
        <div className="res-container">
          {listOfRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} restaurant={restaurant.data} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
