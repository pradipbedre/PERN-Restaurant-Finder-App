import React from "react";
import AddRestaurants from "../components/AddRestaurants";
import Header from "../components/Header";
import RestaurantsList from "../components/RestaurantsList";

const Home = () => {
  return (
    <div>
      <Header />
      <AddRestaurants/>
      <RestaurantsList/>
    </div>
  );
};

export default Home;
