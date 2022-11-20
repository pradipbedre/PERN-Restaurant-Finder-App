import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestautant, setSelectedRestautant] = useState(null);
  const addResToUi = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  return (
    <RestaurantsContext.Provider
      value={[
        restaurants,
        setRestaurants,
        addResToUi,
        selectedRestautant,
        setSelectedRestautant,
      ]}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};
